// import {AxiosResponse} from "axios";
// import {requestAuth} from "shared/api/Request";
import {Adapter} from "./Adapter";
import {mockOffersResponse} from "../lib/img/mockOffers";
import {TOffers} from "../types";


export class Api {
    static async getOffers(): Promise<TOffers> {
        // let res: AxiosResponse<OffersResponse> = await requestAuth.get('offer/available_offers');
        const res = mockOffersResponse;
        return Adapter.getOffers(res.data);
    }
}
