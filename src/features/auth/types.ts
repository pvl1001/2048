import {FormikProps} from "formik";
import {Ref} from "react";
import {TSelectOption} from "shared/ui/select";
import {RegisterFields} from "./lib/consts";
import {RegistrationDataStep3} from "./model/RegistrationSlice";


export type RegistrationFormValues = {
    country: TSelectOption,
    phone: string
}

export type RegistrationStep3Props = {
    nextStep: () => void
}

export type RegistrationFormStep3 = {
    firstName: string
    lastName: string
    birthDay: Partial<TSelectOption>
    birthMonth: Partial<TSelectOption>
    birthYear: Partial<TSelectOption>
    email: string
    zipCode: string
    inviteCode: string
}

export type RegistrationPayloadStep3 = {
    firstName: string
    lastName: string
    birthDay: number
    birthMonth: number
    birthYear: number
    email: string
    zipCode: string
    inviteCode?: string
}

export type UseRegistrationStep3 = {
    onSubmit: (data: RegistrationDataStep3) => Promise<void>
    isPending: boolean
    refFormik: Ref<FormikProps<RegistrationDataStep3>>
}

export type RegistrationPhonePayload = RegistrationFormValues & {
    step1IsCheck?: boolean
}

export type Country = {
    "id": string
    "codeClass": string
    "name": string
    "index": number,
    "phonePrefix": string
    "flagId": FlagId
}

export type RegisterServerErrors = {
    "field": keyof typeof RegisterFields,
    "type": string
}

export type TRegisterFieldErrors = Record<RegisterFields, (err: string) => string>

export type FlagId =
    | "AQ"
    | "AF"
    | "AL"
    | "DZ"
    | "AS"
    | "AD"
    | "AO"
    | "AI"
    | "AG"
    | "AR"
    | "AM"
    | "AW"
    | "AU"
    | "AT"
    | "AZ"
    | "BS"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BA"
    | "BW"
    | "BR"
    | "IO"
    | "VG"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "KH"
    | "CM"
    | "CA"
    | "CV"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CX"
    | "CC"
    | "CO"
    | "KM"
    | "CK"
    | "CR"
    | "HR"
    | "CU"
    | "CW"
    | "CY"
    | "CZ"
    | "CD"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "TL"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "ET"
    | "FK"
    | "FO"
    | "FJ"
    | "FI"
    | "FR"
    | "PF"
    | "GA"
    | "GM"
    | "GE"
    | "DE"
    | "GH"
    | "GI"
    | "GR"
    | "GL"
    | "GD"
    | "GU"
    | "GT"
    | "GG"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HN"
    | "HK"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IM"
    | "IL"
    | "IT"
    | "CI"
    | "JM"
    | "JP"
    | "JE"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "XK"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MK"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MT"
    | "MH"
    | "MR"
    | "MU"
    | "YT"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "ME"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "AN"
    | "NC"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "NU"
    | "KP"
    | "MP"
    | "NO"
    | "OM"
    | "PK"
    | "PW"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PN"
    | "PL"
    | "PT"
    | "PR"
    | "QA"
    | "CG"
    | "RE"
    | "RO"
    | "RU"
    | "RW"
    | "BL"
    | "SH"
    | "KN"
    | "LC"
    | "MF"
    | "PM"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SG"
    | "SX"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SJ"
    | "SZ"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "TG"
    | "TK"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "TC"
    | "TV"
    | "VI"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VA"
    | "VE"
    | "VN"
    | "WF"
    | "EH"
    | "YE"
    | "ZM"
    | "ZW"