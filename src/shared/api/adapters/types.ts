export type ConfigDailyReward = {
    id: number
    bonus: string
    soft: string
    exp: string
}

export type StoreLevelConfig = Record<number, Record<'soft' | 'bonus', number> & {
    exp: number
}>

export type TWithdrawFormConfig = {
    "AccountTypeValues": string
    "BankCode": string
    "CountryCode": string
    "DocumentTypeValues": string
    "FormFields": string
}
