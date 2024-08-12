import {mockHistoryResponse} from "../lib/mockHistoryResponse";
import {Transaction} from "../types";


export class ApiHistory {
    /** Получить историю транзакций */
    static async getTransactions(): Promise<Transaction[]> {
        // let res: AxiosResponse<Transaction[]> = await requestAuth.get('currency_transaction/list', {
        //     params: {
        //         from_id: 0,
        //         limit: 200
        //     }
        // });
        let res = mockHistoryResponse;
        return res.data;
    }
}