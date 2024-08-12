import {ComponentProps} from "react";


export type Variant = 'soft' | 'hard'

export type ProgressBarItemsCurrencyData = Record<Variant, {
    value: string | number
    tippyValue: string
    iconProps: ComponentProps<'img'>
}>
