import {AxiosResponse} from "axios";
import {requestAuth} from "shared/api/Request";
import {MatchInfo} from "../types";


export class Api {
    /** Получить историю матчей */
    static async getMatchHistory(): Promise<MatchInfo[]> {
        const res: AxiosResponse<MatchInfo[]> = await requestAuth.get('match/matches_history', {
            params: {
                skip: 0,
                limit: 20
            }
        });
        return res.data;
    }
}