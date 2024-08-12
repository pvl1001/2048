import {select, useAppSelector} from "app/store";


export enum CurrencySymbols {
    BO = '$b',
    BR = 'R$',
    DM = 'RD$',
    PA = 'B/.',
    PE = 'S/.',
    VE = 'Bs',
    GH = '¢',
    NG = '₦',
    JP = '¥',
    RU = '₽',
    MY = 'RM',
    PH = '₱',
    TH = '฿',
    VN = '₫',
    IN = '₹',
    US = '$',
    ID = 'Rp',
}

export function useCurrencySymbol(): CurrencySymbols {
    let code = useAppSelector(select.profile._registrationCountryCode) as keyof typeof CurrencySymbols;
    return CurrencySymbols[code];
}
