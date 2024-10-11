// import {AxiosResponse} from "axios";
import {mockTournaments} from '../lib/mockTournaments';
// import {request} from "shared/api/Request";
import {Tournament} from "../types";


export class TournamentsApi {
    /** Получить карточки турниров */
    static async getTournaments(): Promise<Tournament[]> {
        // let res: AxiosResponse<Tournament[]> = await request.get('tournament/list');
        return mockTournaments;
        // return res.data;
    }
}
