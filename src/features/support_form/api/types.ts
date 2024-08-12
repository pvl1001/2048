import {FaqCategory} from "../lib/consts";


export type Ticket = {
    ticket: {
        subject: FaqCategory
        id: string
        comment: {
            body: string,
            uploads: string[]
        }
    }
}