import {AxiosResponse} from "axios";
import {requestAuth} from "shared/api/Request";
import {BuyStore} from "shared/common/BuyStore";
import {mockProfile} from "shared/model/profile/lib/mockProfile";
import {ProfileAdapter} from "./adapter";
import {ChangeNameResponse, CreateProfileResponse, Profile, ProfileResponse, ProfileServerResponse} from "../types";


export class ApiProfile {
    /** Изменить имя профиля */
    static async changeName(nickname: string): Promise<ChangeNameResponse> {
        const res: AxiosResponse<ChangeNameResponse> = await requestAuth.post('profile/change_nickname', {nickname});
        return res.data;
    }

    /** Получить данные профиля */
    static async getProfile(): Promise<Profile> {
        // let res: AxiosResponse<ProfileResponse> = await requestAuth.get('profile/get_profile');
        // return ProfileAdapter.getProfile(res.data);
        return mockProfile;
    }

    /** Изменить данные профиля */
    static async setAttrProfile(attrs: Record<string, any>): Promise<Profile> {
        const res: AxiosResponse<{profile: ProfileResponse}> = await requestAuth.post('profile/set_attributes', {attrs});
        return ProfileAdapter.getProfile(res.data.profile);
    }

    /** Получить валюту */
    static async buyItem(buyStoreItem: BuyStore | string): Promise<ProfileServerResponse> {
        const res: AxiosResponse<ProfileServerResponse> = await requestAuth.post('items/buy_item', {
            positionId: buyStoreItem
        });
        return res.data;
    }

    /** Получить награду за уровень */
    static async getLevelClaim(): Promise<ProfileServerResponse> {
        const res: AxiosResponse<ProfileServerResponse> = await requestAuth.post('deal/claim_level_rewards', {});
        return res.data;
    }

    /** Создать временного пользователя */
    static async createProfile(): Promise<CreateProfileResponse> {
        // let res: AxiosResponse<CreateProfileResponse> = await request.post('profile/create_profile');
        // return res.data;
        return {} as CreateProfileResponse;
    }
}