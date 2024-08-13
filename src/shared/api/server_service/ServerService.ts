import {AxiosResponse} from "axios";
import {MatchInfo, PlayMatchResponse} from "entities/result_card";
import {requestAuth} from "shared/api/Request";
import {Cookie} from "shared/lib/Cookie";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {ClaimPayload, ClaimResponse, UnclaimedResponse} from "./types";


export class ServerService {
    /** Обновить токен */
    static async setRefreshToken(): Promise<void> {
        try {
            const res: AxiosResponse<string> = await requestAuth.get('login/refresh_login_token');
            Cookie.set('refreshToken', res.data);
        } catch (err) {
            console.log(getErrorMessage(err));
        }
    }

    /** Старт матча */
    static async playMatch(tournamentId: string): Promise<PlayMatchResponse | void> {
        try {
            const res: AxiosResponse<PlayMatchResponse> = await requestAuth.post('match/play_match', {tournamentId});
            return res.data;
        } catch (err) {
            alert(getErrorMessage(err));
        }
    }

    /** Получить данные о матче */
    static async getMatchResults(matchId: string): Promise<MatchInfo> {
        const res: AxiosResponse<MatchInfo> = await requestAuth.get(`match/match_results/${matchId}`);
        return res.data;
    }

    /** Получить список всех доступных игроку наград */
    static async getUnclaimed(): Promise<UnclaimedResponse> {
        const res: AxiosResponse<UnclaimedResponse> = await requestAuth.get('claim/get_unclaimed');
        return res.data;
    }

    /** Получить награды */
    static async getClaim(data: ClaimPayload): Promise<ClaimResponse> {
        const res: AxiosResponse<ClaimResponse> = await requestAuth.post('claim/claim', data);
        return res.data;
    }
}