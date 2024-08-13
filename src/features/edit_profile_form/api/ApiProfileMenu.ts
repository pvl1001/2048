import {AxiosResponse} from "axios";
import {requestAuth} from "shared/api/Request";


export class ApiProfileMenu {
    /** Валидация имени профиля */
    static async checkName(nickname: string): Promise<string> {
        const res: AxiosResponse<string> = await requestAuth.post('profile/check_nickname', {nickname});
        return res.data;
    }
}