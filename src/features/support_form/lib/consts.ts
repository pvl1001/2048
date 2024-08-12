import {TSelectOption} from "shared/ui/select";


export enum FaqCategory {
    TECHNICAL = 'Technical difficulties',
    PAYMENT = 'Problems with payment',
    CURRENCY = 'Game currency',
    REGISTRATION = 'Registration problems',
    REFERRAL = 'Referral program',
    OTHER = 'Other questions',
}

export const supportOptions: TSelectOption[] = [
    {
        title: FaqCategory.TECHNICAL,
        value: FaqCategory.TECHNICAL
    },
    {
        title: FaqCategory.PAYMENT,
        value: FaqCategory.PAYMENT
    },
    {
        title: FaqCategory.CURRENCY,
        value: FaqCategory.CURRENCY
    },
    {
        title: FaqCategory.REGISTRATION,
        value: FaqCategory.REGISTRATION
    },
    {
        title: FaqCategory.REFERRAL,
        value: FaqCategory.REFERRAL
    },
    {
        title: FaqCategory.OTHER,
        value: FaqCategory.OTHER
    },
];
