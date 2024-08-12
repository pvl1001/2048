import {Country, TRegisterFieldErrors} from "../types";
import {LocalErrors} from "./LocalErrors";


export enum RegisterFields {
    FIRST_NAME = 'firstName',
    LAST_NAME = 'lastName',
    DAY = 'birthDay',
    MONTH = 'birthMonth',
    YEAR = 'birthYear',
    EMAIL = 'email',
    ZIP_CODE = 'zipCode',
    INVITE_CODE = 'inviteCode',
}

export const FieldErrors: Partial<TRegisterFieldErrors> = {
    [RegisterFields.FIRST_NAME]: (err: string) => LocalErrors.firstName(err),
    [RegisterFields.LAST_NAME]: (err: string) => LocalErrors.lastName(err),
    [RegisterFields.EMAIL]: (err: string) => LocalErrors.email(err),
    [RegisterFields.INVITE_CODE]: (err: string) => !!err ? 'Referral code not found' : '',
};

export let countries: Country[] = [
    {
        "id": "ATA",
        "codeClass": "CountryConfig",
        "name": "Antarctica",
        "index": 1,
        "phonePrefix": "+70",
        "flagId": "AQ"
    },
    {
        "id": "AFG",
        "codeClass": "CountryConfig",
        "name": "Afghanistan",
        "index": 2,
        "phonePrefix": "+93",
        "flagId": "AF"
    },
    {
        "id": "ALB",
        "codeClass": "CountryConfig",
        "name": "Albania",
        "index": 3,
        "phonePrefix": "+355",
        "flagId": "AL"
    },
    {
        "id": "DZA",
        "codeClass": "CountryConfig",
        "name": "Algeria",
        "index": 4,
        "phonePrefix": "+213",
        "flagId": "DZ"
    },
    {
        "id": "ASM",
        "codeClass": "CountryConfig",
        "name": "American Samoa",
        "index": 5,
        "phonePrefix": "+1-684",
        "flagId": "AS"
    },
    {
        "id": "AND",
        "codeClass": "CountryConfig",
        "name": "Andorra",
        "index": 6,
        "phonePrefix": "+376",
        "flagId": "AD"
    },
    {
        "id": "AGO",
        "codeClass": "CountryConfig",
        "name": "Angola",
        "index": 7,
        "phonePrefix": "+244",
        "flagId": "AO"
    },
    {
        "id": "AIA",
        "codeClass": "CountryConfig",
        "name": "Anguilla",
        "index": 8,
        "phonePrefix": "+1-264",
        "flagId": "AI"
    },
    {
        "id": "ATG",
        "codeClass": "CountryConfig",
        "name": "Antigua and Barbuda",
        "index": 9,
        "phonePrefix": "+1-268",
        "flagId": "AG"
    },
    {
        "id": "ARG",
        "codeClass": "CountryConfig",
        "name": "Argentina",
        "index": 10,
        "phonePrefix": "+54",
        "flagId": "AR"
    },
    {
        "id": "ARM",
        "codeClass": "CountryConfig",
        "name": "Armenia",
        "index": 11,
        "phonePrefix": "+374",
        "flagId": "AM"
    },
    {
        "id": "ABW",
        "codeClass": "CountryConfig",
        "name": "Aruba",
        "index": 12,
        "phonePrefix": "+297",
        "flagId": "AW"
    },
    {
        "id": "AUS",
        "codeClass": "CountryConfig",
        "name": "Australia",
        "index": 13,
        "phonePrefix": "+61",
        "flagId": "AU"
    },
    {
        "id": "AUT",
        "codeClass": "CountryConfig",
        "name": "Austria",
        "index": 14,
        "phonePrefix": "+43",
        "flagId": "AT"
    },
    {
        "id": "AZE",
        "codeClass": "CountryConfig",
        "name": "Azerbaijan",
        "index": 15,
        "phonePrefix": "+994",
        "flagId": "AZ"
    },
    {
        "id": "BHS",
        "codeClass": "CountryConfig",
        "name": "Bahamas",
        "index": 16,
        "phonePrefix": "+1-242",
        "flagId": "BS"
    },
    {
        "id": "BHR",
        "codeClass": "CountryConfig",
        "name": "Bahrain",
        "index": 17,
        "phonePrefix": "+973",
        "flagId": "BH"
    },
    {
        "id": "BGD",
        "codeClass": "CountryConfig",
        "name": "Bangladesh",
        "index": 18,
        "phonePrefix": "+880",
        "flagId": "BD"
    },
    {
        "id": "BRB",
        "codeClass": "CountryConfig",
        "name": "Barbados",
        "index": 19,
        "phonePrefix": "+1-246",
        "flagId": "BB"
    },
    {
        "id": "BLR",
        "codeClass": "CountryConfig",
        "name": "Belarus",
        "index": 20,
        "phonePrefix": "+375",
        "flagId": "BY"
    },
    {
        "id": "BEL",
        "codeClass": "CountryConfig",
        "name": "Belgium",
        "index": 21,
        "phonePrefix": "+32",
        "flagId": "BE"
    },
    {
        "id": "BLZ",
        "codeClass": "CountryConfig",
        "name": "Belize",
        "index": 22,
        "phonePrefix": "+501",
        "flagId": "BZ"
    },
    {
        "id": "BEN",
        "codeClass": "CountryConfig",
        "name": "Benin",
        "index": 23,
        "phonePrefix": "+229",
        "flagId": "BJ"
    },
    {
        "id": "BMU",
        "codeClass": "CountryConfig",
        "name": "Bermuda",
        "index": 24,
        "phonePrefix": "+1-441",
        "flagId": "BM"
    },
    {
        "id": "BTN",
        "codeClass": "CountryConfig",
        "name": "Bhutan",
        "index": 25,
        "phonePrefix": "+975",
        "flagId": "BT"
    },
    {
        "id": "BOL",
        "codeClass": "CountryConfig",
        "name": "Bolivia",
        "index": 26,
        "phonePrefix": "+591",
        "flagId": "BO"
    },
    {
        "id": "BIH",
        "codeClass": "CountryConfig",
        "name": "Bosnia and Herzegovina",
        "index": 27,
        "phonePrefix": "+387",
        "flagId": "BA"
    },
    {
        "id": "BWA",
        "codeClass": "CountryConfig",
        "name": "Botswana",
        "index": 28,
        "phonePrefix": "+267",
        "flagId": "BW"
    },
    {
        "id": "BRA",
        "codeClass": "CountryConfig",
        "name": "Brazil",
        "index": 29,
        "phonePrefix": "+55",
        "flagId": "BR"
    },
    {
        "id": "IOT",
        "codeClass": "CountryConfig",
        "name": "British Indian Ocean Territory",
        "index": 30,
        "phonePrefix": "+246",
        "flagId": "IO"
    },
    {
        "id": "VGB",
        "codeClass": "CountryConfig",
        "name": "British Virgin Islands",
        "index": 31,
        "phonePrefix": "+1-284",
        "flagId": "VG"
    },
    {
        "id": "BRN",
        "codeClass": "CountryConfig",
        "name": "Brunei",
        "index": 32,
        "phonePrefix": "+673",
        "flagId": "BN"
    },
    {
        "id": "BGR",
        "codeClass": "CountryConfig",
        "name": "Bulgaria",
        "index": 33,
        "phonePrefix": "+359",
        "flagId": "BG"
    },
    {
        "id": "BFA",
        "codeClass": "CountryConfig",
        "name": "Burkina Faso",
        "index": 34,
        "phonePrefix": "+226",
        "flagId": "BF"
    },
    {
        "id": "BDI",
        "codeClass": "CountryConfig",
        "name": "Burundi",
        "index": 35,
        "phonePrefix": "+257",
        "flagId": "BI"
    },
    {
        "id": "KHM",
        "codeClass": "CountryConfig",
        "name": "Cambodia",
        "index": 36,
        "phonePrefix": "+855",
        "flagId": "KH"
    },
    {
        "id": "CMR",
        "codeClass": "CountryConfig",
        "name": "Cameroon",
        "index": 37,
        "phonePrefix": "+237",
        "flagId": "CM"
    },
    {
        "id": "CAN",
        "codeClass": "CountryConfig",
        "name": "Canada",
        "index": 38,
        "phonePrefix": "+1",
        "flagId": "CA"
    },
    {
        "id": "CPV",
        "codeClass": "CountryConfig",
        "name": "Cape Verde",
        "index": 39,
        "phonePrefix": "+238",
        "flagId": "CV"
    },
    {
        "id": "CYM",
        "codeClass": "CountryConfig",
        "name": "Cayman Islands",
        "index": 40,
        "phonePrefix": "+1-345",
        "flagId": "KY"
    },
    {
        "id": "CAF",
        "codeClass": "CountryConfig",
        "name": "Central African Republic",
        "index": 41,
        "phonePrefix": "+236",
        "flagId": "CF"
    },
    {
        "id": "TCD",
        "codeClass": "CountryConfig",
        "name": "Chad",
        "index": 42,
        "phonePrefix": "+235",
        "flagId": "TD"
    },
    {
        "id": "CHL",
        "codeClass": "CountryConfig",
        "name": "Chile",
        "index": 43,
        "phonePrefix": "+56",
        "flagId": "CL"
    },
    {
        "id": "CHN",
        "codeClass": "CountryConfig",
        "name": "China",
        "index": 44,
        "phonePrefix": "+86",
        "flagId": "CN"
    },
    {
        "id": "CXR",
        "codeClass": "CountryConfig",
        "name": "Christmas Island",
        "index": 45,
        "phonePrefix": "+61",
        "flagId": "CX"
    },
    {
        "id": "CCK",
        "codeClass": "CountryConfig",
        "name": "Cocos Islands",
        "index": 46,
        "phonePrefix": "+61",
        "flagId": "CC"
    },
    {
        "id": "COL",
        "codeClass": "CountryConfig",
        "name": "Colombia",
        "index": 47,
        "phonePrefix": "+57",
        "flagId": "CO"
    },
    {
        "id": "COM",
        "codeClass": "CountryConfig",
        "name": "Comoros",
        "index": 48,
        "phonePrefix": "+269",
        "flagId": "KM"
    },
    {
        "id": "COK",
        "codeClass": "CountryConfig",
        "name": "Cook Islands",
        "index": 49,
        "phonePrefix": "+682",
        "flagId": "CK"
    },
    {
        "id": "CRI",
        "codeClass": "CountryConfig",
        "name": "Costa Rica",
        "index": 50,
        "phonePrefix": "+506",
        "flagId": "CR"
    },
    {
        "id": "HRV",
        "codeClass": "CountryConfig",
        "name": "Croatia",
        "index": 51,
        "phonePrefix": "+385",
        "flagId": "HR"
    },
    {
        "id": "CUB",
        "codeClass": "CountryConfig",
        "name": "Cuba",
        "index": 52,
        "phonePrefix": "+53",
        "flagId": "CU"
    },
    {
        "id": "CUW",
        "codeClass": "CountryConfig",
        "name": "Curacao",
        "index": 53,
        "phonePrefix": "+599",
        "flagId": "CW"
    },
    {
        "id": "CYP",
        "codeClass": "CountryConfig",
        "name": "Cyprus",
        "index": 54,
        "phonePrefix": "+357",
        "flagId": "CY"
    },
    {
        "id": "CZE",
        "codeClass": "CountryConfig",
        "name": "Czech Republic",
        "index": 55,
        "phonePrefix": "+420",
        "flagId": "CZ"
    },
    {
        "id": "COD",
        "codeClass": "CountryConfig",
        "name": "Democratic Republic of the Congo",
        "index": 56,
        "phonePrefix": "+243",
        "flagId": "CD"
    },
    {
        "id": "DNK",
        "codeClass": "CountryConfig",
        "name": "Denmark",
        "index": 57,
        "phonePrefix": "+45",
        "flagId": "DK"
    },
    {
        "id": "DJI",
        "codeClass": "CountryConfig",
        "name": "Djibouti",
        "index": 58,
        "phonePrefix": "+253",
        "flagId": "DJ"
    },
    {
        "id": "DMA",
        "codeClass": "CountryConfig",
        "name": "Dominica",
        "index": 59,
        "phonePrefix": "+1-767",
        "flagId": "DM"
    },
    {
        "id": "DOM",
        "codeClass": "CountryConfig",
        "name": "Dominican Republic",
        "index": 60,
        "phonePrefix": "+1",
        "flagId": "DO"
    },
    {
        "id": "TLS",
        "codeClass": "CountryConfig",
        "name": "East Timor",
        "index": 61,
        "phonePrefix": "+670",
        "flagId": "TL"
    },
    {
        "id": "ECU",
        "codeClass": "CountryConfig",
        "name": "Ecuador",
        "index": 62,
        "phonePrefix": "+593",
        "flagId": "EC"
    },
    {
        "id": "EGY",
        "codeClass": "CountryConfig",
        "name": "Egypt",
        "index": 63,
        "phonePrefix": "+20",
        "flagId": "EG"
    },
    {
        "id": "SLV",
        "codeClass": "CountryConfig",
        "name": "El Salvador",
        "index": 64,
        "phonePrefix": "+503",
        "flagId": "SV"
    },
    {
        "id": "GNQ",
        "codeClass": "CountryConfig",
        "name": "Equatorial Guinea",
        "index": 65,
        "phonePrefix": "+240",
        "flagId": "GQ"
    },
    {
        "id": "ERI",
        "codeClass": "CountryConfig",
        "name": "Eritrea",
        "index": 66,
        "phonePrefix": "+291",
        "flagId": "ER"
    },
    {
        "id": "EST",
        "codeClass": "CountryConfig",
        "name": "Estonia",
        "index": 67,
        "phonePrefix": "+372",
        "flagId": "EE"
    },
    {
        "id": "ETH",
        "codeClass": "CountryConfig",
        "name": "Ethiopia",
        "index": 68,
        "phonePrefix": "+251",
        "flagId": "ET"
    },
    {
        "id": "FLK",
        "codeClass": "CountryConfig",
        "name": "Falkland Islands",
        "index": 69,
        "phonePrefix": "+500",
        "flagId": "FK"
    },
    {
        "id": "FRO",
        "codeClass": "CountryConfig",
        "name": "Faroe Islands",
        "index": 70,
        "phonePrefix": "+298",
        "flagId": "FO"
    },
    {
        "id": "FJI",
        "codeClass": "CountryConfig",
        "name": "Fiji",
        "index": 71,
        "phonePrefix": "+679",
        "flagId": "FJ"
    },
    {
        "id": "FIN",
        "codeClass": "CountryConfig",
        "name": "Finland",
        "index": 72,
        "phonePrefix": "+358",
        "flagId": "FI"
    },
    {
        "id": "FRA",
        "codeClass": "CountryConfig",
        "name": "France",
        "index": 73,
        "phonePrefix": "+33",
        "flagId": "FR"
    },
    {
        "id": "PYF",
        "codeClass": "CountryConfig",
        "name": "French Polynesia",
        "index": 74,
        "phonePrefix": "+689",
        "flagId": "PF"
    },
    {
        "id": "GAB",
        "codeClass": "CountryConfig",
        "name": "Gabon",
        "index": 75,
        "phonePrefix": "+241",
        "flagId": "GA"
    },
    {
        "id": "GMB",
        "codeClass": "CountryConfig",
        "name": "Gambia",
        "index": 76,
        "phonePrefix": "+220",
        "flagId": "GM"
    },
    {
        "id": "GEO",
        "codeClass": "CountryConfig",
        "name": "Georgia",
        "index": 77,
        "phonePrefix": "+995",
        "flagId": "GE"
    },
    {
        "id": "DEU",
        "codeClass": "CountryConfig",
        "name": "Germany",
        "index": 78,
        "phonePrefix": "+49",
        "flagId": "DE"
    },
    {
        "id": "GHA",
        "codeClass": "CountryConfig",
        "name": "Ghana",
        "index": 79,
        "phonePrefix": "+233",
        "flagId": "GH"
    },
    {
        "id": "GIB",
        "codeClass": "CountryConfig",
        "name": "Gibraltar",
        "index": 80,
        "phonePrefix": "+350",
        "flagId": "GI"
    },
    {
        "id": "GRC",
        "codeClass": "CountryConfig",
        "name": "Greece",
        "index": 81,
        "phonePrefix": "+30",
        "flagId": "GR"
    },
    {
        "id": "GRL",
        "codeClass": "CountryConfig",
        "name": "Greenland",
        "index": 82,
        "phonePrefix": "+299",
        "flagId": "GL"
    },
    {
        "id": "GRD",
        "codeClass": "CountryConfig",
        "name": "Grenada",
        "index": 83,
        "phonePrefix": "+1-473",
        "flagId": "GD"
    },
    {
        "id": "GUM",
        "codeClass": "CountryConfig",
        "name": "Guam",
        "index": 84,
        "phonePrefix": "+1-671",
        "flagId": "GU"
    },
    {
        "id": "GTM",
        "codeClass": "CountryConfig",
        "name": "Guatemala",
        "index": 85,
        "phonePrefix": "+502",
        "flagId": "GT"
    },
    {
        "id": "GGY",
        "codeClass": "CountryConfig",
        "name": "Guernsey",
        "index": 86,
        "phonePrefix": "+44-1481",
        "flagId": "GG"
    },
    {
        "id": "GIN",
        "codeClass": "CountryConfig",
        "name": "Guinea",
        "index": 87,
        "phonePrefix": "+224",
        "flagId": "GN"
    },
    {
        "id": "GNB",
        "codeClass": "CountryConfig",
        "name": "Guinea-Bissau",
        "index": 88,
        "phonePrefix": "+245",
        "flagId": "GW"
    },
    {
        "id": "GUY",
        "codeClass": "CountryConfig",
        "name": "Guyana",
        "index": 89,
        "phonePrefix": "+592",
        "flagId": "GY"
    },
    {
        "id": "HTI",
        "codeClass": "CountryConfig",
        "name": "Haiti",
        "index": 90,
        "phonePrefix": "+509",
        "flagId": "HT"
    },
    {
        "id": "HND",
        "codeClass": "CountryConfig",
        "name": "Honduras",
        "index": 91,
        "phonePrefix": "+504",
        "flagId": "HN"
    },
    {
        "id": "HKG",
        "codeClass": "CountryConfig",
        "name": "Hong Kong",
        "index": 92,
        "phonePrefix": "+852",
        "flagId": "HK"
    },
    {
        "id": "HUN",
        "codeClass": "CountryConfig",
        "name": "Hungary",
        "index": 93,
        "phonePrefix": "+36",
        "flagId": "HU"
    },
    {
        "id": "ISL",
        "codeClass": "CountryConfig",
        "name": "Iceland",
        "index": 94,
        "phonePrefix": "+354",
        "flagId": "IS"
    },
    {
        "id": "IND",
        "codeClass": "CountryConfig",
        "name": "India",
        "index": 95,
        "phonePrefix": "+91",
        "flagId": "IN"
    },
    {
        "id": "IDN",
        "codeClass": "CountryConfig",
        "name": "Indonesia",
        "index": 96,
        "phonePrefix": "+62",
        "flagId": "ID"
    },
    {
        "id": "IRN",
        "codeClass": "CountryConfig",
        "name": "Iran",
        "index": 97,
        "phonePrefix": "+98",
        "flagId": "IR"
    },
    {
        "id": "IRQ",
        "codeClass": "CountryConfig",
        "name": "Iraq",
        "index": 98,
        "phonePrefix": "+964",
        "flagId": "IQ"
    },
    {
        "id": "IRL",
        "codeClass": "CountryConfig",
        "name": "Ireland",
        "index": 99,
        "phonePrefix": "+353",
        "flagId": "IE"
    },
    {
        "id": "IMN",
        "codeClass": "CountryConfig",
        "name": "Isle of Man",
        "index": 100,
        "phonePrefix": "+44-1624",
        "flagId": "IM"
    },
    {
        "id": "ISR",
        "codeClass": "CountryConfig",
        "name": "Israel",
        "index": 101,
        "phonePrefix": "+972",
        "flagId": "IL"
    },
    {
        "id": "ITA",
        "codeClass": "CountryConfig",
        "name": "Italy",
        "index": 102,
        "phonePrefix": "+39",
        "flagId": "IT"
    },
    {
        "id": "CIV",
        "codeClass": "CountryConfig",
        "name": "Ivory Coast",
        "index": 103,
        "phonePrefix": "+225",
        "flagId": "CI"
    },
    {
        "id": "JAM",
        "codeClass": "CountryConfig",
        "name": "Jamaica",
        "index": 104,
        "phonePrefix": "+1-876",
        "flagId": "JM"
    },
    {
        "id": "JPN",
        "codeClass": "CountryConfig",
        "name": "Japan",
        "index": 105,
        "phonePrefix": "+81",
        "flagId": "JP"
    },
    {
        "id": "JEY",
        "codeClass": "CountryConfig",
        "name": "Jersey",
        "index": 106,
        "phonePrefix": "+44-1534",
        "flagId": "JE"
    },
    {
        "id": "JOR",
        "codeClass": "CountryConfig",
        "name": "Jordan",
        "index": 107,
        "phonePrefix": "+962",
        "flagId": "JO"
    },
    {
        "id": "KAZ",
        "codeClass": "CountryConfig",
        "name": "Kazakhstan",
        "index": 108,
        "phonePrefix": "+7",
        "flagId": "KZ"
    },
    {
        "id": "KEN",
        "codeClass": "CountryConfig",
        "name": "Kenya",
        "index": 109,
        "phonePrefix": "+254",
        "flagId": "KE"
    },
    {
        "id": "KIR",
        "codeClass": "CountryConfig",
        "name": "Kiribati",
        "index": 110,
        "phonePrefix": "+686",
        "flagId": "KI"
    },
    {
        "id": "XKX",
        "codeClass": "CountryConfig",
        "name": "Kosovo",
        "index": 111,
        "phonePrefix": "+383",
        "flagId": "XK"
    },
    {
        "id": "KWT",
        "codeClass": "CountryConfig",
        "name": "Kuwait",
        "index": 112,
        "phonePrefix": "+965",
        "flagId": "KW"
    },
    {
        "id": "KGZ",
        "codeClass": "CountryConfig",
        "name": "Kyrgyzstan",
        "index": 113,
        "phonePrefix": "+996",
        "flagId": "KG"
    },
    {
        "id": "LAO",
        "codeClass": "CountryConfig",
        "name": "Laos",
        "index": 114,
        "phonePrefix": "+856",
        "flagId": "LA"
    },
    {
        "id": "LVA",
        "codeClass": "CountryConfig",
        "name": "Latvia",
        "index": 115,
        "phonePrefix": "+371",
        "flagId": "LV"
    },
    {
        "id": "LBN",
        "codeClass": "CountryConfig",
        "name": "Lebanon",
        "index": 116,
        "phonePrefix": "+961",
        "flagId": "LB"
    },
    {
        "id": "LSO",
        "codeClass": "CountryConfig",
        "name": "Lesotho",
        "index": 117,
        "phonePrefix": "+266",
        "flagId": "LS"
    },
    {
        "id": "LBR",
        "codeClass": "CountryConfig",
        "name": "Liberia",
        "index": 118,
        "phonePrefix": "+231",
        "flagId": "LR"
    },
    {
        "id": "LBY",
        "codeClass": "CountryConfig",
        "name": "Libya",
        "index": 119,
        "phonePrefix": "+218",
        "flagId": "LY"
    },
    {
        "id": "LIE",
        "codeClass": "CountryConfig",
        "name": "Liechtenstein",
        "index": 120,
        "phonePrefix": "+423",
        "flagId": "LI"
    },
    {
        "id": "LTU",
        "codeClass": "CountryConfig",
        "name": "Lithuania",
        "index": 121,
        "phonePrefix": "+370",
        "flagId": "LT"
    },
    {
        "id": "LUX",
        "codeClass": "CountryConfig",
        "name": "Luxembourg",
        "index": 122,
        "phonePrefix": "+352",
        "flagId": "LU"
    },
    {
        "id": "MAC",
        "codeClass": "CountryConfig",
        "name": "Macau",
        "index": 123,
        "phonePrefix": "+853",
        "flagId": "MO"
    },
    {
        "id": "MKD",
        "codeClass": "CountryConfig",
        "name": "Macedonia",
        "index": 124,
        "phonePrefix": "+389",
        "flagId": "MK"
    },
    {
        "id": "MDG",
        "codeClass": "CountryConfig",
        "name": "Madagascar",
        "index": 125,
        "phonePrefix": "+261",
        "flagId": "MG"
    },
    {
        "id": "MWI",
        "codeClass": "CountryConfig",
        "name": "Malawi",
        "index": 126,
        "phonePrefix": "+265",
        "flagId": "MW"
    },
    {
        "id": "MYS",
        "codeClass": "CountryConfig",
        "name": "Malaysia",
        "index": 127,
        "phonePrefix": "+60",
        "flagId": "MY"
    },
    {
        "id": "MDV",
        "codeClass": "CountryConfig",
        "name": "Maldives",
        "index": 128,
        "phonePrefix": "+960",
        "flagId": "MV"
    },
    {
        "id": "MLI",
        "codeClass": "CountryConfig",
        "name": "Mali",
        "index": 129,
        "phonePrefix": "+223",
        "flagId": "ML"
    },
    {
        "id": "MLT",
        "codeClass": "CountryConfig",
        "name": "Malta",
        "index": 130,
        "phonePrefix": "+356",
        "flagId": "MT"
    },
    {
        "id": "MHL",
        "codeClass": "CountryConfig",
        "name": "Marshall Islands",
        "index": 131,
        "phonePrefix": "+692",
        "flagId": "MH"
    },
    {
        "id": "MRT",
        "codeClass": "CountryConfig",
        "name": "Mauritania",
        "index": 132,
        "phonePrefix": "+222",
        "flagId": "MR"
    },
    {
        "id": "MUS",
        "codeClass": "CountryConfig",
        "name": "Mauritius",
        "index": 133,
        "phonePrefix": "+230",
        "flagId": "MU"
    },
    {
        "id": "MYT",
        "codeClass": "CountryConfig",
        "name": "Mayotte",
        "index": 134,
        "phonePrefix": "+262",
        "flagId": "YT"
    },
    {
        "id": "MEX",
        "codeClass": "CountryConfig",
        "name": "Mexico",
        "index": 135,
        "phonePrefix": "+52",
        "flagId": "MX"
    },
    {
        "id": "FSM",
        "codeClass": "CountryConfig",
        "name": "Micronesia",
        "index": 136,
        "phonePrefix": "+691",
        "flagId": "FM"
    },
    {
        "id": "MDA",
        "codeClass": "CountryConfig",
        "name": "Moldova",
        "index": 137,
        "phonePrefix": "+373",
        "flagId": "MD"
    },
    {
        "id": "MCO",
        "codeClass": "CountryConfig",
        "name": "Monaco",
        "index": 138,
        "phonePrefix": "+377",
        "flagId": "MC"
    },
    {
        "id": "MNG",
        "codeClass": "CountryConfig",
        "name": "Mongolia",
        "index": 139,
        "phonePrefix": "+976",
        "flagId": "MN"
    },
    {
        "id": "MNE",
        "codeClass": "CountryConfig",
        "name": "Montenegro",
        "index": 140,
        "phonePrefix": "+382",
        "flagId": "ME"
    },
    {
        "id": "MSR",
        "codeClass": "CountryConfig",
        "name": "Montserrat",
        "index": 141,
        "phonePrefix": "+1-664",
        "flagId": "MS"
    },
    {
        "id": "MAR",
        "codeClass": "CountryConfig",
        "name": "Morocco",
        "index": 142,
        "phonePrefix": "+212",
        "flagId": "MA"
    },
    {
        "id": "MOZ",
        "codeClass": "CountryConfig",
        "name": "Mozambique",
        "index": 143,
        "phonePrefix": "+258",
        "flagId": "MZ"
    },
    {
        "id": "MMR",
        "codeClass": "CountryConfig",
        "name": "Myanmar",
        "index": 144,
        "phonePrefix": "+95",
        "flagId": "MM"
    },
    {
        "id": "NAM",
        "codeClass": "CountryConfig",
        "name": "Namibia",
        "index": 145,
        "phonePrefix": "+264",
        "flagId": "NA"
    },
    {
        "id": "NRU",
        "codeClass": "CountryConfig",
        "name": "Nauru",
        "index": 146,
        "phonePrefix": "+674",
        "flagId": "NR"
    },
    {
        "id": "NPL",
        "codeClass": "CountryConfig",
        "name": "Nepal",
        "index": 147,
        "phonePrefix": "+977",
        "flagId": "NP"
    },
    {
        "id": "NLD",
        "codeClass": "CountryConfig",
        "name": "Netherlands",
        "index": 148,
        "phonePrefix": "+31",
        "flagId": "NL"
    },
    {
        "id": "ANT",
        "codeClass": "CountryConfig",
        "name": "Netherlands Antilles",
        "index": 149,
        "phonePrefix": "+599",
        "flagId": "AN"
    },
    {
        "id": "NCL",
        "codeClass": "CountryConfig",
        "name": "New Caledonia",
        "index": 150,
        "phonePrefix": "+687",
        "flagId": "NC"
    },
    {
        "id": "NZL",
        "codeClass": "CountryConfig",
        "name": "New Zealand",
        "index": 151,
        "phonePrefix": "+64",
        "flagId": "NZ"
    },
    {
        "id": "NIC",
        "codeClass": "CountryConfig",
        "name": "Nicaragua",
        "index": 152,
        "phonePrefix": "+505",
        "flagId": "NI"
    },
    {
        "id": "NER",
        "codeClass": "CountryConfig",
        "name": "Niger",
        "index": 153,
        "phonePrefix": "+227",
        "flagId": "NE"
    },
    {
        "id": "NGA",
        "codeClass": "CountryConfig",
        "name": "Nigeria",
        "index": 154,
        "phonePrefix": "+234",
        "flagId": "NG"
    },
    {
        "id": "NIU",
        "codeClass": "CountryConfig",
        "name": "Niue",
        "index": 155,
        "phonePrefix": "+683",
        "flagId": "NU"
    },
    {
        "id": "PRK",
        "codeClass": "CountryConfig",
        "name": "North Korea",
        "index": 156,
        "phonePrefix": "+850",
        "flagId": "KP"
    },
    {
        "id": "MNP",
        "codeClass": "CountryConfig",
        "name": "Northern Mariana Islands",
        "index": 157,
        "phonePrefix": "+1-670",
        "flagId": "MP"
    },
    {
        "id": "NOR",
        "codeClass": "CountryConfig",
        "name": "Norway",
        "index": 158,
        "phonePrefix": "+47",
        "flagId": "NO"
    },
    {
        "id": "OMN",
        "codeClass": "CountryConfig",
        "name": "Oman",
        "index": 159,
        "phonePrefix": "+968",
        "flagId": "OM"
    },
    {
        "id": "PAK",
        "codeClass": "CountryConfig",
        "name": "Pakistan",
        "index": 160,
        "phonePrefix": "+92",
        "flagId": "PK"
    },
    {
        "id": "PLW",
        "codeClass": "CountryConfig",
        "name": "Palau",
        "index": 161,
        "phonePrefix": "+680",
        "flagId": "PW"
    },
    {
        "id": "PSE",
        "codeClass": "CountryConfig",
        "name": "Palestine",
        "index": 162,
        "phonePrefix": "+970",
        "flagId": "PS"
    },
    {
        "id": "PAN",
        "codeClass": "CountryConfig",
        "name": "Panama",
        "index": 163,
        "phonePrefix": "+507",
        "flagId": "PA"
    },
    {
        "id": "PNG",
        "codeClass": "CountryConfig",
        "name": "Papua New Guinea",
        "index": 164,
        "phonePrefix": "+675",
        "flagId": "PG"
    },
    {
        "id": "PRY",
        "codeClass": "CountryConfig",
        "name": "Paraguay",
        "index": 165,
        "phonePrefix": "+595",
        "flagId": "PY"
    },
    {
        "id": "PER",
        "codeClass": "CountryConfig",
        "name": "Peru",
        "index": 166,
        "phonePrefix": "+51",
        "flagId": "PE"
    },
    {
        "id": "PHL",
        "codeClass": "CountryConfig",
        "name": "Philippines",
        "index": 167,
        "phonePrefix": "+63",
        "flagId": "PH"
    },
    {
        "id": "PCN",
        "codeClass": "CountryConfig",
        "name": "Pitcairn",
        "index": 168,
        "phonePrefix": "+64",
        "flagId": "PN"
    },
    {
        "id": "POL",
        "codeClass": "CountryConfig",
        "name": "Poland",
        "index": 169,
        "phonePrefix": "+48",
        "flagId": "PL"
    },
    {
        "id": "PRT",
        "codeClass": "CountryConfig",
        "name": "Portugal",
        "index": 170,
        "phonePrefix": "+351",
        "flagId": "PT"
    },
    {
        "id": "PRI",
        "codeClass": "CountryConfig",
        "name": "Puerto Rico",
        "index": 171,
        "phonePrefix": "+1",
        "flagId": "PR"
    },
    {
        "id": "QAT",
        "codeClass": "CountryConfig",
        "name": "Qatar",
        "index": 172,
        "phonePrefix": "+974",
        "flagId": "QA"
    },
    {
        "id": "COG",
        "codeClass": "CountryConfig",
        "name": "Republic of the Congo",
        "index": 173,
        "phonePrefix": "+242",
        "flagId": "CG"
    },
    {
        "id": "REU",
        "codeClass": "CountryConfig",
        "name": "Reunion",
        "index": 174,
        "phonePrefix": "+262",
        "flagId": "RE"
    },
    {
        "id": "ROU",
        "codeClass": "CountryConfig",
        "name": "Romania",
        "index": 175,
        "phonePrefix": "+40",
        "flagId": "RO"
    },
    {
        "id": "RUS",
        "codeClass": "CountryConfig",
        "name": "Russia",
        "index": 176,
        "phonePrefix": "+7",
        "flagId": "RU"
    },
    {
        "id": "RWA",
        "codeClass": "CountryConfig",
        "name": "Rwanda",
        "index": 177,
        "phonePrefix": "+250",
        "flagId": "RW"
    },
    {
        "id": "BLM",
        "codeClass": "CountryConfig",
        "name": "Saint Barthelemy",
        "index": 178,
        "phonePrefix": "+590",
        "flagId": "BL"
    },
    {
        "id": "SHN",
        "codeClass": "CountryConfig",
        "name": "Saint Helena",
        "index": 179,
        "phonePrefix": "+290",
        "flagId": "SH"
    },
    {
        "id": "KNA",
        "codeClass": "CountryConfig",
        "name": "Saint Kitts and Nevis",
        "index": 180,
        "phonePrefix": "+1-869",
        "flagId": "KN"
    },
    {
        "id": "LCA",
        "codeClass": "CountryConfig",
        "name": "Saint Lucia",
        "index": 181,
        "phonePrefix": "+1-758",
        "flagId": "LC"
    },
    {
        "id": "MAF",
        "codeClass": "CountryConfig",
        "name": "Saint Martin",
        "index": 182,
        "phonePrefix": "+590",
        "flagId": "MF"
    },
    {
        "id": "SPM",
        "codeClass": "CountryConfig",
        "name": "Saint Pierre and Miquelon",
        "index": 183,
        "phonePrefix": "+508",
        "flagId": "PM"
    },
    {
        "id": "VCT",
        "codeClass": "CountryConfig",
        "name": "Saint Vincent and the Grenadines",
        "index": 184,
        "phonePrefix": "+1-784",
        "flagId": "VC"
    },
    {
        "id": "WSM",
        "codeClass": "CountryConfig",
        "name": "Samoa",
        "index": 185,
        "phonePrefix": "+685",
        "flagId": "WS"
    },
    {
        "id": "SMR",
        "codeClass": "CountryConfig",
        "name": "San Marino",
        "index": 186,
        "phonePrefix": "+378",
        "flagId": "SM"
    },
    {
        "id": "STP",
        "codeClass": "CountryConfig",
        "name": "Sao Tome and Principe",
        "index": 187,
        "phonePrefix": "+239",
        "flagId": "ST"
    },
    {
        "id": "SAU",
        "codeClass": "CountryConfig",
        "name": "Saudi Arabia",
        "index": 188,
        "phonePrefix": "+966",
        "flagId": "SA"
    },
    {
        "id": "SEN",
        "codeClass": "CountryConfig",
        "name": "Senegal",
        "index": 189,
        "phonePrefix": "+221",
        "flagId": "SN"
    },
    {
        "id": "SRB",
        "codeClass": "CountryConfig",
        "name": "Serbia",
        "index": 190,
        "phonePrefix": "+381",
        "flagId": "RS"
    },
    {
        "id": "SYC",
        "codeClass": "CountryConfig",
        "name": "Seychelles",
        "index": 191,
        "phonePrefix": "+248",
        "flagId": "SC"
    },
    {
        "id": "SLE",
        "codeClass": "CountryConfig",
        "name": "Sierra Leone",
        "index": 192,
        "phonePrefix": "+232",
        "flagId": "SL"
    },
    {
        "id": "SGP",
        "codeClass": "CountryConfig",
        "name": "Singapore",
        "index": 193,
        "phonePrefix": "+65",
        "flagId": "SG"
    },
    {
        "id": "SXM",
        "codeClass": "CountryConfig",
        "name": "Sint Maarten",
        "index": 194,
        "phonePrefix": "+1-721",
        "flagId": "SX"
    },
    {
        "id": "SVK",
        "codeClass": "CountryConfig",
        "name": "Slovakia",
        "index": 195,
        "phonePrefix": "+421",
        "flagId": "SK"
    },
    {
        "id": "SVN",
        "codeClass": "CountryConfig",
        "name": "Slovenia",
        "index": 196,
        "phonePrefix": "+386",
        "flagId": "SI"
    },
    {
        "id": "SLB",
        "codeClass": "CountryConfig",
        "name": "Solomon Islands",
        "index": 197,
        "phonePrefix": "+677",
        "flagId": "SB"
    },
    {
        "id": "SOM",
        "codeClass": "CountryConfig",
        "name": "Somalia",
        "index": 198,
        "phonePrefix": "+252",
        "flagId": "SO"
    },
    {
        "id": "ZAF",
        "codeClass": "CountryConfig",
        "name": "South Africa",
        "index": 199,
        "phonePrefix": "+27",
        "flagId": "ZA"
    },
    {
        "id": "KOR",
        "codeClass": "CountryConfig",
        "name": "South Korea",
        "index": 200,
        "phonePrefix": "+82",
        "flagId": "KR"
    },
    {
        "id": "SSD",
        "codeClass": "CountryConfig",
        "name": "South Sudan",
        "index": 201,
        "phonePrefix": "+211",
        "flagId": "SS"
    },
    {
        "id": "ESP",
        "codeClass": "CountryConfig",
        "name": "Spain",
        "index": 202,
        "phonePrefix": "+34",
        "flagId": "ES"
    },
    {
        "id": "LKA",
        "codeClass": "CountryConfig",
        "name": "Sri Lanka",
        "index": 203,
        "phonePrefix": "+94",
        "flagId": "LK"
    },
    {
        "id": "SDN",
        "codeClass": "CountryConfig",
        "name": "Sudan",
        "index": 204,
        "phonePrefix": "+249",
        "flagId": "SD"
    },
    {
        "id": "SUR",
        "codeClass": "CountryConfig",
        "name": "Suriname",
        "index": 205,
        "phonePrefix": "+597",
        "flagId": "SR"
    },
    {
        "id": "SJM",
        "codeClass": "CountryConfig",
        "name": "Svalbard and Jan Mayen",
        "index": 206,
        "phonePrefix": "+47",
        "flagId": "SJ"
    },
    {
        "id": "SWZ",
        "codeClass": "CountryConfig",
        "name": "Swaziland",
        "index": 207,
        "phonePrefix": "+268",
        "flagId": "SZ"
    },
    {
        "id": "SWE",
        "codeClass": "CountryConfig",
        "name": "Sweden",
        "index": 208,
        "phonePrefix": "+46",
        "flagId": "SE"
    },
    {
        "id": "CHE",
        "codeClass": "CountryConfig",
        "name": "Switzerland",
        "index": 209,
        "phonePrefix": "+41",
        "flagId": "CH"
    },
    {
        "id": "SYR",
        "codeClass": "CountryConfig",
        "name": "Syria",
        "index": 210,
        "phonePrefix": "+963",
        "flagId": "SY"
    },
    {
        "id": "TWN",
        "codeClass": "CountryConfig",
        "name": "Taiwan",
        "index": 211,
        "phonePrefix": "+886",
        "flagId": "TW"
    },
    {
        "id": "TJK",
        "codeClass": "CountryConfig",
        "name": "Tajikistan",
        "index": 212,
        "phonePrefix": "+992",
        "flagId": "TJ"
    },
    {
        "id": "TZA",
        "codeClass": "CountryConfig",
        "name": "Tanzania",
        "index": 213,
        "phonePrefix": "+255",
        "flagId": "TZ"
    },
    {
        "id": "THA",
        "codeClass": "CountryConfig",
        "name": "Thailand",
        "index": 214,
        "phonePrefix": "+66",
        "flagId": "TH"
    },
    {
        "id": "TGO",
        "codeClass": "CountryConfig",
        "name": "Togo",
        "index": 215,
        "phonePrefix": "+228",
        "flagId": "TG"
    },
    {
        "id": "TKL",
        "codeClass": "CountryConfig",
        "name": "Tokelau",
        "index": 216,
        "phonePrefix": "+690",
        "flagId": "TK"
    },
    {
        "id": "TON",
        "codeClass": "CountryConfig",
        "name": "Tonga",
        "index": 217,
        "phonePrefix": "+676",
        "flagId": "TO"
    },
    {
        "id": "TTO",
        "codeClass": "CountryConfig",
        "name": "Trinidad and Tobago",
        "index": 218,
        "phonePrefix": "+1-868",
        "flagId": "TT"
    },
    {
        "id": "TUN",
        "codeClass": "CountryConfig",
        "name": "Tunisia",
        "index": 219,
        "phonePrefix": "+216",
        "flagId": "TN"
    },
    {
        "id": "TUR",
        "codeClass": "CountryConfig",
        "name": "Turkey",
        "index": 220,
        "phonePrefix": "+90",
        "flagId": "TR"
    },
    {
        "id": "TKM",
        "codeClass": "CountryConfig",
        "name": "Turkmenistan",
        "index": 221,
        "phonePrefix": "+993",
        "flagId": "TM"
    },
    {
        "id": "TCA",
        "codeClass": "CountryConfig",
        "name": "Turks and Caicos Islands",
        "index": 222,
        "phonePrefix": "+1-649",
        "flagId": "TC"
    },
    {
        "id": "TUV",
        "codeClass": "CountryConfig",
        "name": "Tuvalu",
        "index": 223,
        "phonePrefix": "+688",
        "flagId": "TV"
    },
    {
        "id": "VIR",
        "codeClass": "CountryConfig",
        "name": "U.S. Virgin Islands",
        "index": 224,
        "phonePrefix": "+1-340",
        "flagId": "VI"
    },
    {
        "id": "UGA",
        "codeClass": "CountryConfig",
        "name": "Uganda",
        "index": 225,
        "phonePrefix": "+256",
        "flagId": "UG"
    },
    {
        "id": "UKR",
        "codeClass": "CountryConfig",
        "name": "Ukraine",
        "index": 226,
        "phonePrefix": "+380",
        "flagId": "UA"
    },
    {
        "id": "ARE",
        "codeClass": "CountryConfig",
        "name": "United Arab Emirates",
        "index": 227,
        "phonePrefix": "+971",
        "flagId": "AE"
    },
    {
        "id": "GBR",
        "codeClass": "CountryConfig",
        "name": "United Kingdom",
        "index": 228,
        "phonePrefix": "+44",
        "flagId": "GB"
    },
    {
        "id": "USA",
        "codeClass": "CountryConfig",
        "name": "United States",
        "index": 229,
        "phonePrefix": "+1",
        "flagId": "US"
    },
    {
        "id": "URY",
        "codeClass": "CountryConfig",
        "name": "Uruguay",
        "index": 230,
        "phonePrefix": "+598",
        "flagId": "UY"
    },
    {
        "id": "UZB",
        "codeClass": "CountryConfig",
        "name": "Uzbekistan",
        "index": 231,
        "phonePrefix": "+998",
        "flagId": "UZ"
    },
    {
        "id": "VUT",
        "codeClass": "CountryConfig",
        "name": "Vanuatu",
        "index": 232,
        "phonePrefix": "+678",
        "flagId": "VU"
    },
    {
        "id": "VAT",
        "codeClass": "CountryConfig",
        "name": "Vatican",
        "index": 233,
        "phonePrefix": "+379",
        "flagId": "VA"
    },
    {
        "id": "VEN",
        "codeClass": "CountryConfig",
        "name": "Venezuela",
        "index": 234,
        "phonePrefix": "+58",
        "flagId": "VE"
    },
    {
        "id": "VNM",
        "codeClass": "CountryConfig",
        "name": "Vietnam",
        "index": 235,
        "phonePrefix": "+84",
        "flagId": "VN"
    },
    {
        "id": "WLF",
        "codeClass": "CountryConfig",
        "name": "Wallis and Futuna",
        "index": 236,
        "phonePrefix": "+681",
        "flagId": "WF"
    },
    {
        "id": "ESH",
        "codeClass": "CountryConfig",
        "name": "Western Sahara",
        "index": 237,
        "phonePrefix": "+212",
        "flagId": "EH"
    },
    {
        "id": "YEM",
        "codeClass": "CountryConfig",
        "name": "Yemen",
        "index": 238,
        "phonePrefix": "+967",
        "flagId": "YE"
    },
    {
        "id": "ZMB",
        "codeClass": "CountryConfig",
        "name": "Zambia",
        "index": 239,
        "phonePrefix": "+260",
        "flagId": "ZM"
    },
    {
        "id": "ZWE",
        "codeClass": "CountryConfig",
        "name": "Zimbabwe",
        "index": 240,
        "phonePrefix": "+263",
        "flagId": "ZW"
    }
];
