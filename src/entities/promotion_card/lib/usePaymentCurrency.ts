import {select, useAppSelector} from "app/store";
import {CurrencySymbols, useCurrencySymbol} from "shared/lib/hooks";
import {Mask} from "shared/lib/Mask";
import {PaymentCurrency} from "shared/model/global_config";


export type UsePaymentCurrency = {
    currencyName: string
    getConvertPaymentCurrency: (centum: number) => string
}

export function usePaymentCurrency() {
    const paymentCurrency: PaymentCurrency | undefined = useAppSelector(select.promotions._currency);
    const currencySymbol: CurrencySymbols = useCurrencySymbol();

    const currencyName: string = paymentCurrency?.Currency ?? 'USD';

    function getConvertPaymentCurrency(centum: number): string {
        return ((+Mask.hardCurrency(centum) ?? 0) * +(paymentCurrency?.ConversionRate ?? 0)).toFixed(0) + currencySymbol;
    }

    return {
        currencyName,
        getConvertPaymentCurrency,
    };
}
