import {requestAuth} from "shared/api/Request";
import getErrorMessage from "shared/lib/GetErrorMessage";


export class Api {
    static async postAckOffers(offerIds: string[]): Promise<void> {
        try {
            await requestAuth.post('offer/ack_offers', {offerIds});
        } catch (err: unknown) {
            console.log(getErrorMessage(err));
            throw err;
        }
    }
}
