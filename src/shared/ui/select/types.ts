import {Dispatch, Ref} from "react";


export type TSelectOption = {
    code?: string
    icon?: string
    value: string | number
    title: string
}

export type TUseSelect = {
    inputRef: Ref<HTMLInputElement>
    dropdownRef: Ref<HTMLDivElement>
    arrowRef: Ref<HTMLDivElement>
    isVisible: boolean
    setIsVisible: Dispatch<TUseSelect['isVisible']>
    openSelect: () => void
    closeSelect: () => void
}