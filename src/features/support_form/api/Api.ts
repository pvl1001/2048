import {AxiosResponse} from "axios";
import {requestZendesk} from "shared/api/Request";
import {Ticket} from "./types";


export class Api {
    static async uploadFile(filename: string, data: ArrayBuffer | string): Promise<string> {
        let res: AxiosResponse<any> = await requestZendesk.post(`/uploads`, data, {
            headers: {"Content-Type": 'application/binary'},
            params: {filename}
        });
        return res.data.upload.token;
    }

    static async postTicket(ticket: Ticket) {
        await requestZendesk.post('/tickets', ticket);
    }
}