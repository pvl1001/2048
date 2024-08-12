import {TSelectOption} from "shared/ui/select";
import {Bank, BankCodesResponse} from "./types";


export class Adapter {
    static bankCodes(res: BankCodesResponse): TSelectOption[] {
        return res.map((bank: Bank) => ({
            title: bank.name,
            value: bank.code
        }));
    }
}