// import {AxiosResponse} from "axios";
// import {requestAuth} from "shared/api/Request";
import {mockOffersResponse} from "../lib/img/mockOffers";
import {TOffers} from "../types";
import {Adapter} from "./Adapter";


export class Api {
    static async getOffers(): Promise<TOffers> {
        // let res: AxiosResponse<OffersResponse> = await requestAuth.get('offer/available_offers');
        let res = mockOffersResponse;
        return Adapter.getOffers(res.data);
    }
}
