import {select, useAppSelector} from "app/store";
import {RegistrationFormStep3} from "features/auth";
import {Fields, TValidationCountryParam, TValidationRegexParam, TWithdrawBankValues, TWithdrawValues, validationParams} from "features/withdraw_forms";
import {useLocation} from "react-router-dom";
import {TWithdrawFormConfig} from "shared/api/adapters";
import {addMethod, object, ObjectSchema, string, TestContext} from "yup";
import {DateUtils} from "../DateUtils";


export type TValidationSchema = {
    withdrawBank: ObjectSchema<TWithdrawBankValues>
    withdrawForm: (currentForm: TWithdrawFormConfig, documentValidate: TValidationRegexParam) => ObjectSchema<TWithdrawValues> | any
    email: ObjectSchema<{email: string}>
    registrationPhone: ObjectSchema<{country: {title?: string}, phone: string}>
    registrationStep3: ObjectSchema<Omit<RegistrationFormStep3, 'inviteCode'>>
    support: ObjectSchema<{category: {title: string}, email: string, question: string}>
}

addMethod(string, 'email', function () {
    return this.matches(RegExp('\\w+@\\w+\\.\\w+'), {
        message: 'email must match the following: example@gmail.com',
        excludeEmptyString: true,
    });
});

export function useValidationSchema(): TValidationSchema {
    let location = useLocation();
    let {ageRestriction} = useAppSelector(select.config._region);
    let config = useAppSelector(select.config._designInt);

    let email = string()
        .email()
        .required('email required')
        .max(config.maxEmailLength, `Max length ${config.maxEmailLength}`);

    return {
        withdrawBank: object().shape({
            bank: object().shape({
                title: string().required('Choose country'),
                value: string().required('Choose country'),
            }),
        }),
        withdrawForm: (currentForm: TWithdrawFormConfig, documentValidate: TValidationRegexParam) => {
            let {CountryCode} = currentForm;
            let localBankCode = location.state.bankCode as number;
            let validationParam = validationParams[CountryCode as keyof typeof validationParams] as TValidationCountryParam;
            let accountParam: TValidationRegexParam = validationParam.account[localBankCode] ?? validationParam.account.other;
            let map = new Map();

            if (currentForm?.FormFields.includes(Fields.BANK_ACCOUNT_NUMBER)) map.set(Fields.BANK_ACCOUNT_NUMBER, string()
                .matches(accountParam.regex, accountParam.error)
                .required('Required'));
            if (currentForm?.FormFields.includes(Fields.BANK_ACCOUNT_PHONE)) map.set(Fields.BANK_ACCOUNT_PHONE, string()
                .matches(accountParam.regex, accountParam.error)
                .required('Required'));
            if (currentForm?.FormFields.includes(Fields.BANK_ACCOUNT_CLABE)) map.set(Fields.BANK_ACCOUNT_CLABE, string()
                .matches(accountParam.regex, accountParam.error)
                .required('Required'));
            if (currentForm?.FormFields.includes(Fields.BANK_ACCOUNT_CCI)) map.set(Fields.BANK_ACCOUNT_CCI, string()
                .matches(accountParam.regex, accountParam.error)
                .required('Required'));
            if (currentForm?.FormFields.includes(Fields.BANK_ACCOUNT_USERNAME)) map.set(Fields.BANK_ACCOUNT_USERNAME, string()
                .matches(accountParam.regex, accountParam.error)
                .required('Required'));

            if (validationParam.branch) {
                let branchParam = validationParam.branch[localBankCode] ?? validationParam.branch.other;
                let testBranch = (val?: string, context?: TestContext) => {
                    if (val && branchParam && branchParam.regex.test(val)) {
                        if (branchParam.exception?.regex.test(val)) {
                            return context?.createError({message: branchParam.exception.error});
                        }
                        return true;
                    }
                };

                if (currentForm?.FormFields.includes(Fields.BANK_BRANCH)) map.set(Fields.BANK_BRANCH, string()
                    .test(Fields.BANK_BRANCH, branchParam.error, testBranch)
                    .required('Required'));
                if (currentForm?.FormFields.includes(Fields.BANK_BRANCH_IFSC)) map.set(Fields.BANK_BRANCH_IFSC, string()
                    .test(Fields.BANK_BRANCH_IFSC, branchParam.error, testBranch)
                    .required('Required'));
                if (currentForm?.FormFields.includes(Fields.BANK_BRANCH_PASSWORD)) map.set(Fields.BANK_BRANCH_PASSWORD, string()
                    .test(Fields.BANK_BRANCH_PASSWORD, branchParam.error, testBranch)
                    .required('Required'));
            }

            if (currentForm?.FormFields.includes(Fields.ACCOUNT_TYPE)) map.set(Fields.ACCOUNT_TYPE, object().shape({
                value: string().required('Choose account type'),
            }));
            if (currentForm?.FormFields.includes(Fields.DOCUMENT_TYPE)) map.set(Fields.DOCUMENT_TYPE, object().shape({
                value: string().required('Choose document type'),
            }));
            if (currentForm?.FormFields.includes(Fields.DOCUMENT_ID)) map.set(Fields.DOCUMENT_ID, string()
                .matches(documentValidate.regex, documentValidate.error)
                .required('Required'));

            return object().shape(Object.fromEntries(map));
        },
        email: object().shape({email}),
        registrationPhone: object().shape({
            country: object().shape({
                title: string().required('Choose country'),
            }),

            phone: string()
                .required('Phone number required')
                .min(10, 'Min length 10'),
        }),
        registrationStep3: object().shape({
            firstName: string()
                .required('First name required')
                .min(config.minFirstNameLength, `Min length ${config.minFirstNameLength}`)
                .max(config.maxFirstNameLength, `Max length ${config.maxFirstNameLength}`),

            lastName: string()
                .required('Last name required')
                .min(config.minSecondNameLength, `Min length ${config.minSecondNameLength}`)
                .max(config.maxSecondNameLength, `Max length ${config.maxSecondNameLength}`),

            birthDay: object().shape({
                value: string().required('Day of birth required'),
            }),

            birthMonth: object().shape({
                value: string().required('Month of birth required'),
            }),

            birthYear: object().shape({
                value: string().test('birthYear', `Min ${ageRestriction} year`, (year?: string) => {
                    if (!year) return;
                    let yearNow: number = DateUtils.getYearNow();
                    return +year <= yearNow - ageRestriction;
                }).required('Year of birth required'),
            }),

            email,

            zipCode: string()
                .required('ZIP/Postal code required')
                .min(config.minZipCodeLength, `Min length ${config.minZipCodeLength}`)
                .max(config.maxZipCodeLength, `Max length ${config.maxZipCodeLength}`),

            referralCode: string()
                .max(config.maxReferralCodeLength, `Max length ${config.maxReferralCodeLength}`),
        }),
        support: object().shape({
            email,
            category: object().shape({
                title: string().required('Choose category'),
            }),
            question: string().required('Enter question'),
        }),
    };
}
