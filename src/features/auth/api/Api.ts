import {AxiosError, AxiosResponse} from "axios";
import dayjs from "dayjs";
import {request, requestAuth} from "shared/api/Request";
import {BlockTimerPayload} from "shared/api/server_service";
import {StorageItem} from "shared/common/StorageItem";
import {DateUtils} from "shared/lib/DateUtils";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {LocalStorage} from "shared/lib/LocalStorage";
import {CheckRegDataResponse, RegistrationDataResponse, RegistrationStep3Response} from "./types";
import {FlagId, RegistrationPayloadStep3} from "../types";


export class Api {
    private static setError(message: string) {
        const error: any = new AxiosError();
        error.response = {data: {strCode: message}};
        throw error;
    }

    private static setLocalCounter(phone: string) {
        const counter: {[p: string]: number} = LocalStorage.getValue(StorageItem.REQUEST_COUNTER);
        const payloadCounter: {[p: string]: number} = counter
            ? {...counter, [phone]: ++counter[phone]}
            : {[phone]: 1};
        LocalStorage.setKeyValue(StorageItem.REQUEST_COUNTER, payloadCounter);
    }

    private static withBlockTimer({storageName, sec, phone}: BlockTimerPayload, req: () => Promise<{data: string}>): Promise<{data: string}> | void {
        const unixTime: string = localStorage.getItem(storageName) ?? '';
        const diff: number = unixTime ? DateUtils.codeTimer(+unixTime) : 0;
        const counter: {[p: string]: number} = LocalStorage.getValue(StorageItem.REQUEST_COUNTER);

        if (!counter?.[phone] || diff === null || diff > sec) {
            console.log('success!');

            if (storageName === StorageItem.DATE_REGISTER) {
                this.setLocalCounter(phone);
            }

            const dateNow: number = dayjs().unix();
            LocalStorage.setKeyValue(storageName, dateNow);
            return req();
        } else {
            console.log(`reject: diff ${diff}/${sec}`);
            this.setError('Too many requests. Try later');
        }
    }

    private static withCounterTimer(phone: string, fnCb: (sec: number) => Promise<{data: string}> | void) {
        const counter: {[p: string]: number} = LocalStorage.getValue(StorageItem.REQUEST_COUNTER);
        if (counter?.[phone] && counter[phone] % 3 === 0) {
            console.log('diff 600', counter?.[phone]);
            return fnCb(600);
        }
        console.log('diff 90');
        return fnCb(90);
    }

    /** Валидация региона */
    static async validateRegion(): Promise<FlagId> {
        const res: AxiosResponse<FlagId> = await request.post('login/validate_region');
        return res.data;
    }

    /** Регистрация шаг 1. Форма номера телефона */
    static async registerPhone(phone: string): Promise<any | void> {
        return this.withCounterTimer(
            phone,
            (sec: number) => this.withBlockTimer({storageName: StorageItem.DATE_REGISTER, sec, phone}, () => requestAuth.post('login/register_phone', {phone}))
        );
    }

    /** Регистрация шаг 2. Подтверждение номера телефона*/
    static async confirmRegisterPhone(data: {phone: string, code: string}): Promise<string> {
        const res: AxiosResponse<string> = await requestAuth.post('login/confirm_phone', data);
        return res.data;
    }

    /** Валидация полей регистрации для запроса register_account */
    private static async checkRegData(data: RegistrationPayloadStep3): Promise<CheckRegDataResponse> {
        const res: AxiosResponse<CheckRegDataResponse> = await requestAuth.post('/login/check_reg_data', {
            "firstName": data.firstName,
            "lastName": data.lastName,
            "email": data.email,
            "zipCode": data.zipCode,
            "inviteCode": data.inviteCode
        });
        return res.data;
    }

    /** Регистрация шаг 3. Форма с данными юзера */
    static async registerAccount(data: RegistrationPayloadStep3): Promise<RegistrationStep3Response> {
        const check = await this.checkRegData(data);
        if (check.result === 'ERROR') {
            throw check.errors;
        }
        const res: AxiosResponse<RegistrationStep3Response> = await requestAuth.post('login/register_account', data);
        return res.data;
    }

    /** Регистрация шаг 4. Подтверждение почты */
    static async confirmAccount(data: {code: string}): Promise<string | void> {
        try {
            const res: AxiosResponse<string> = await requestAuth.post('login/confirm_account', data);
            return res.data;
        } catch (err) {
            console.log(getErrorMessage(err));
        }
    }

    /** Проверить, завершена ли регистрация, и получить новый токен для логина, если регистрация пройдена. */
    static async getRegistrationData(): Promise<RegistrationDataResponse> {
        const res: AxiosResponse<RegistrationDataResponse> = await requestAuth.get('login/get_reg_data');
        return res.data;
    }

    /** Логин шаг 1. Отправка формы */
    static async login(data: {login: string}): Promise<unknown> {
        return await request.post('login/login', data);
    }

    /** Логин шаг 2. Подтверждение номера телефона */
    static async confirmLoginPhone(data: {login: string, code: string}): Promise<string> {
        const res: AxiosResponse<string> = await request.post('login/confirm_login', data);
        return res.data;
    }
}
