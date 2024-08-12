import {TSelectOption} from "shared/ui/select";


export type TSupportForm = {
    email: string
    category: TSelectOption
    question: string
}

export type TSupportFile = {
    id: string
    file: File
    error?: string
}