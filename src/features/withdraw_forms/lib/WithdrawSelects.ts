import {TSelectOption} from "shared/ui/select";


export const WithdrawSelects = {
    accountType: (types: string[]) => {
        return types.reduce((acc, el) => {
            const title = {
                C: 'Checkings account',
                S: 'Savings account',
                O: 'Joint checkings',
                P: 'Joint savings account',
            };
            acc.push({
                title: title[el as keyof typeof title],
                value: el,
            });
            return acc;
        }, [] as TSelectOption[]);
    },
    documentType: (types: string[]) => {
        return types.reduce((acc, el) => {
            const title = {
                CI: 'CI',
                CIE: 'CIE',
                PASS: 'PASS',
                NIT: 'NIT',
                CPF: 'CPF',
                DL: 'DL',
                HC: 'HC',
                DNI: 'DNI',
                ID: 'ID',
                UID: 'UID',
                RUN: 'RUN',
                RUT: 'RUT',
                RUC: 'RUC',
                CC: 'CC',
                CE: 'CE',
                PPT: 'PPT',
                CURP: 'CURP',
                RFC: 'RFC',
                IFE: 'IFE',
                CPP: 'CPP',
                NIK: 'NIK',
                KTP: 'KTP',
                RD: 'RD',
                PSN: 'PSN',
            };
            acc.push({
                title: title[el.trim() as keyof typeof title],
                value: el,
            });
            return acc;
        }, [] as TSelectOption[]);
    },
} as const;