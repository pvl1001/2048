import {TValidationParams} from "../types";


export let validationParams: TValidationParams = {
    BO: { // Bolivia
        account: {
            other: {
                regex: /^\d{4,30}$/,
                error: 'Numeric. Between 4 and 30 characters.'
            }
        },
        documentType: {
            CI: {
                regex: /^\d{7}$/,
                error: 'Numeric. Length: 7'
            },
            CIE: {
                regex: /^[a-zA-Z]\d{8}$/,
                error: 'Alphanumeric. One character followed by 8 digits'
            },
            PASS: {
                regex: /^[a-zA-Z]\d{6}$/,
                error: 'Alphanumeric. One character followed by 6 digits'
            },
            NIT: {
                regex: /^\d{12}$/,
                error: 'Numeric. Length: 12'
            },
        }
    },
    BR: { // Brazil
        account: {
            other: {
                regex: /^\d{1,9}(-)?[\d]$/,
                error: 'Format: DDDDDDDDDD-D or DDDDDDDDDDD where D are digits. The number of digits may change, but can\'t exceed 11 digits'
            },
            1: {
                regex: /^\d{1,9}(-)?[\dxX]$/,
                error: 'Format: DDDDDDDDD-X or DDDDDDDDDX where D are digits and X is a digit or the letter \'X\'. The number of digits may change, but can\'t exceed 10 digits'
            },
            33: {
                regex: /^\d{7,8}(-)?[\d]$/,
                error: 'Format: DDDDDDDD, DDDDDDDDD, DDDDDDDD-D, DDDDDDDD-D where D are digits. The number of digits has to be 8 or 9'
            },
            41: {
                regex: /^\d{9}(-)?[\d]$/,
                error: 'Format: DDDDDDDDD-D or DDDDDDDDDD where D are digits. The number of digits has to be 10'
            },
            104: {
                regex: /^\d{1,14}(-)?[\d]$/,
                error: 'Format: DDDDDDDDD-D or DDDDDDDDDDDDDD-D where D are digits. The number of digits has to be between 1 and 15'
            },
            237: {
                regex: /^\d{1,7}(-)?[\d]$/,
                error: 'Format: DDDDDDD-D or DDDDDDDD where D are digits. The number of digits may change, but can\'t exceed 8 digits'
            },
            323: {
                regex: /^\d{1,9}(-)?[\d]$/,
                error: 'Format: DDDDDDDDDD-D or DDDDDDDDDDD where D are digits. The number of digits may change, but can\'t exceed 11 digits'
            },
            341: {
                regex: /^\d{1,5}(-)?[\d]$/,
                error: 'Format: DDDDD-D or DDDDDD where D are digits. The number of digits may change, but can\'t exceed 6 digits'
            },
        },
        branch: {
            other: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDD-D or DDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits'
            },
            1: {
                regex: /^\d{1,4}(-)?[\dxX]$/,
                error: 'Format: DDDD-X or DDDDX where D are digits and X is a digit or the letter \'X\'. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^0{0,4}(-)?[\dxX]$/,
                    error: 'Can\'t have 4 zeros and a digit.',
                }
            },
            33: {
                regex: /^\d{1,4}$/,
                error: 'Format: DDDD where D are digits. The number of digits may change, but can\'t exceed 4 digits',
                exception: {
                    regex: /^033$/,
                    error: 'Can\'t be 033',
                }
            },
            41: {
                regex: /^\d{1,4}(-)?[\dxX]$/,
                error: 'Format: DDDD-X or DDDDX where D are digits and X is a digit or the letter \'X\'. The number of digits may change, but can\'t exceed 5 digits',
            },
            77: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDD-D or DDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^0{0,3}77$/,
                    error: 'Can\'t start with zeros followed by 77'
                }
            },
            104: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDD-D or DDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^001$|^013$|^023$|^104$/,
                    error: 'Can\'t be: 001/013/023/104'
                }
            },
            212: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDDD-D or DDDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^0{0,2}212$/,
                    error: 'Can\'t start with zeros followed by 212'
                }
            },
            237: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDD-D or DDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^237$/,
                    error: 'Can\'t be 237'
                }
            },
            260: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDD-D or DDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^0{0,2}260$/,
                    error: 'Can\'t start with zeros followed by 260'
                }
            },
            290: {
                regex: /^\d{3}(-)?[\d]$/,
                error: 'Format: DDD-D or DDDD where D are digits. The number of digits may change, but can\'t exceed 4 digits',
                exception: {
                    regex: /^0{0,2}290$/,
                    error: 'Can\'t start with zeros followed by 290'
                }
            },
            341: {
                regex: /^\d{1,4}(-)?[\d]$/,
                error: 'Format: DDDD-D or DDDDD where D are digits. The number of digits may change, but can\'t exceed 5 digits',
                exception: {
                    regex: /^341$/,
                    error: 'Can\'t be 314'
                }
            },
            10000: {
                regex: /^([+55]{3})([(]?[0]?[1-9]{2}[)]?)[9]?([1-9]{4})-?([0-9]{4})$/,
                error: 'Format: "+55 012 92345-1234"',
            },
        },
        documentType: {
            CPF: {
                regex: /^\d{11}$/,
                error: 'Numeric. Length: 11'
            }
        }
    },
    CA: { // Canada
        account: {
            other: {
                regex: /^\d{3,16}$/,
                error: 'Numeric between 3 and 16 digits.'
            }
        },
        branch: {
            other: {
                regex: /^.{5}$/,
                error: 'String of 5 characters'
            }
        },
        documentType: {
            DL: {
                regex: /^(\d{6,9}|.{10,15})$/,
                error: 'Numeric and length between 6 and 9 inclusive or string between 10 and 15 inclusive'
            },
            HC: {
                regex: /^\d{10}$/,
                error: 'Numeric. Length 10'
            },
            PASS: {
                regex: /^.{8,12}$/,
                error: 'Length between 8 and 12 inclusive'
            },
        }
    },
    CL: { // Chile
        account: {
            other: {
                regex: /^\d{6,16}$/,
                error: 'Numeric between 6 and 16 digits.'
            }
        },
        documentType: {
            ID: {
                regex: /^.{8,9}$/,
                error: 'Length 8 or 9'
            },
            RUN: {
                regex: /^.{8,9}$/,
                error: 'Length 8 or 9'
            },
            RUT: {
                regex: /^.{8,9}$/,
                error: 'Length 8 or 9'
            },
        }
    },
    CO: { // Colombia
        account: {
            other: {
                regex: /^\d{8,19}$/,
                error: 'Numeric between 8 and 19 digits.'
            },
            10006: {
                regex: /^[\s\S]{1,20}$/,
                error: 'Customer\'s mobile phone and customer\'s email'
            },
            10007: {
                regex: /^\d{8,19}$/,
                error: 'Numeric'
            },
            1507: {
                regex: /^[\s\S]{1,20}$/,
                error: 'Customer\'s mobile phone'
            },
            1551: {
                regex: /^[\s\S]{1,20}$/,
                error: 'Customer\'s mobile phone'
            },
            10001: {
                regex: /^\d{8,19}$/,
                error: 'Numeric between 8 and 19 digits.'
            },
            10002: {
                regex: /^\d{8,19}$/,
                error: 'Numeric between 8 and 19 digits.'
            },
            10003: {
                regex: /^\d{8,19}$/,
                error: 'Numeric between 8 and 19 digits.'
            },
        },
        documentType: {
            CC: {
                regex: /^\d{6,10}$/,
                error: 'Numeric. Length between 6 and 10 inclusive'
            },
            NIT: {
                regex: /^\d{8,15}$/,
                error: 'Numeric. Length between 8 and 15'
            },
            CE: {
                regex: /^\d{6,10}$/,
                error: 'Numeric. Length between 6 and 10 inclusive'
            },
            PASS: {
                regex: /^.{6,10}$/,
                error: 'Length between 6 and 10 inclusive'
            },
            PPT: {
                regex: /^.{7,10}$/,
                error: 'Length between 7 and 10 inclusive'
            },
        }
    },
    EC: { // Ecuador
        account: {
            other: {
                regex: /^\d{5,20}$/,
                error: 'Numeric between 5 and 20 digits.'
            },
            10007: {
                regex: /^\d{5,12}$/,
                error: '593 (Ecuador Country code) + 9 digits Cellphone'
            }
        },
        documentType: {
            CC: {
                regex: /^\d{9,10}$/,
                error: 'Numeric. Length between 9 and 10 inclusive'
            },
            DL: {
                regex: /^\d{10}$/,
                error: 'Numeric. Length 10'
            },
            RUC: {
                regex: /^\d{9,10}001$/,
                error: 'Numeric. Length between 12 and 13 inclusive and ends with 001'
            },
            PASS: {
                regex: /^[a-zA-Z0-9]{5,10}001$/,
                error: 'Alphanumeric. Length between 8 and 13 inclusive and ends with 001'
            },
        }
    },
    MX: { // Mexico
        account: {
            other: {
                regex: /^\d{18}$/,
                error: 'Numeric 18 digits'
            },
            10000: {
                regex: /^\d{10}$/,
                error: 'Numeric 10 digits'
            },
        },
        documentType: {
            CURP: {
                regex: /^.{8,18}$/,
                error: 'Length between 8 and 18 inclusive'
            },
            RFC: {
                regex: /^.{8,18}$/,
                error: 'Length between 8 and 18 inclusive'
            },
            IFE: {
                regex: /^.{8,18}$/,
                error: 'Length between 8 and 18 inclusive'
            },
            PASS: {
                regex: /^.{8,18}$/,
                error: 'Length between 8 and 18 inclusive'
            },
        }
    },
    PE: { // Peru
        account: {
            other: {
                regex: /^\d{20}$/,
                error: 'Numeric 20 digits'
            }
        },
        documentType: {
            CE: {
                regex: /^\d{9}$/,
                error: 'Numeric. Length 9'
            },
            CPP: {
                regex: /^\d{9}$/,
                error: 'Numeric. Length 9'
            },
            DNI: {
                regex: /^\d{8,9}$/,
                error: 'Numeric. Length 8-9'
            },
            PASS: {
                regex: /^\d{12}$/,
                error: 'Numeric. Length 12'
            },
            RUC: {
                regex: /^\d{11}$/,
                error: 'Numeric. Length 11'
            },
        }
    },
    KE: { // Kenya
        account: {
            other: {
                regex: /^\d+$/,
                error: 'Numeric'
            }
        },
        documentType: {
            ID: {
                regex: /^.{7,12}$/,
                error: 'Length between 7 and 12 inclusive'
            },
        }
    },
    NG: { // Nigeria
        account: {
            other: {
                regex: /^\d+$/,
                error: 'Numeric'
            }
        },
        documentType: {
            ID: {
                regex: /^.{9,12}$/,
                error: 'Length between 9 and 12 inclusive'
            },
        }
    },
    IN: { // India
        account: {
            other: {
                regex: /^[0-9-.]{9,18}$/,
                error: 'Numeric values, not allowing spaces in between. Length between 9 and 18 inclusive'
            },
        },
        branch: {
            other: {
                regex: /^[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/,
                error: 'Invalid IFSC format'
            }
        },
        documentType: {
            ID: {
                regex: /^.{8,12}$/,
                error: 'Length between 8 and 12 inclusive'
            },
            DL: {
                regex: /^.{15,16}$/,
                error: 'Length between 15 and 16 inclusive'
            },
            UID: {
                regex: /^\d{12}$/,
                error: 'Numeric. Length 12'
            },
        }
    },
    ID: { // Indonesia
        account: {
            other: {
                regex: /^\d+$/,
                error: 'Numeric'
            }
        },
        documentType: {
            NIK: {
                regex: /^\d{14,18}$/,
                error: 'Numeric. Length between 14 and 18 inclusive'
            },
            KTP: {
                regex: /^\d{14,18}$/,
                error: 'Numeric. Length between 14 and 18 inclusive'
            },
        }
    },
    JP: { // Japan
        account: {
            other: {
                regex: /^\d{6,8}$/,
                error: 'Numeric bank account. Length between 6 and 8 digits inclusive'
            },
            10000: {
                regex: /^\d{6,8}$/,
                error: 'Numeric bank account. Length between 6 and 8 digits inclusive'
            },
            10001: {
                regex: /^\d{6}$/,
                error: 'Numeric 6 digits'
            },
        },
        branch: {
            other: {
                regex: /^\d{1,3}$/,
                error: 'Bank branch number. Max. length: 3 characters'
            },
            10000: {
                regex: /^\d{1,3}$/,
                error: 'Bank branch number. Max. length: 3 characters'
            },
        },
        documentType: {
            DL: {
                regex: /^.{9,12}$/,
                error: 'Length between 9 and 12 inclusive'
            },
            ID: {
                regex: /^.{9,12}$/,
                error: 'Length between 9 and 12 inclusive'
            },
            PASS: {
                regex: /^.{9,12}$/,
                error: 'Length between 9 and 12 inclusive'
            },
            RD: {
                regex: /^.{9,12}$/,
                error: 'Length between 9 and 12 inclusive'
            },
        }
    },
    MY: { // Malaysia
        account: {
            other: {
                regex: /^\d+$/,
                error: 'Numeric'
            }
        },
        documentType: {
            ID: {
                regex: /^\d{10,14}$/,
                error: 'Numeric. Length between 10 and 14 inclusive'
            },
        }
    },
    PH: { // Philippines
        account: {
            other: {
                regex: /^\d{12}$/,
                error: 'Numeric. Length 12'
            },
            1: {
                regex: /^\d{10}$/,
                error: 'Numeric. Length 10'
            },
            2: {
                regex: /^\d{11}$/,
                error: 'Phone number'
            },
            3: {
                regex: /^\d{11}$/,
                error: 'Phone number'
            },
            4: {
                regex: /^\d{11}$/,
                error: 'Phone number'
            },
            8: {
                regex: /^\d{13}$/,
                error: 'Numeric. Length 13'
            },
            10: {
                regex: /^(\d{12}|\d{16})$/,
                error: 'Numeric. Length 12 or 16'
            },
            13: {
                regex: /^(\d{10}|\d{12})$/,
                error: 'Numeric. Length 10 or 12'
            },
            14: {
                regex: /^(\d{10}|\d{16})$/,
                error: 'Numeric. Length 10 or 16'
            },
            15: {
                regex: /^(\d{12}|\d{15})$/,
                error: 'Numeric. Length 12 or 15'
            },
            18: {
                regex: /^\d{10}$/,
                error: 'Numeric. Length 10'
            },
            25: {
                regex: /^\d{10}$/,
                error: 'Numeric. Length 10'
            },
            216: {
                regex: /^(\d{11}|\d{12})$/,
                error: 'Phone number'
            },
            667: {
                regex: /^(\d{10}|\d{12})$/,
                error: 'Numeric. Length 10 or 12'
            },
            996: {
                regex: /^\d{13}$/,
                error: 'Numeric. Length 13'
            },
        },
        documentType: {
            PSN: {
                regex: /^\d{9,13}$/,
                error: 'Numeric. Length between 9 and 13 inclusive'
            },
        }
    },
    TH: { // Thailand
        account: {
            other: {
                regex: /^\d+$/,
                error: 'Numeric'
            }
        },
        documentType: {
            ID: {
                regex: /^\d{10,14}$/,
                error: 'Numeric. Length between 10 and 14 inclusive'
            },
        }
    },
    VN: { // Vietnam
        account: {
            other: {
                regex: /^\d+$/,
                error: 'Numeric'
            }
        },
        documentType: {
            ID: {
                regex: /^\d{9,13}$/,
                error: 'Numeric. Length between 9 and 13 inclusive'
            },
        }
    },
};