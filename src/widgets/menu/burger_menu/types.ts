import {initialHelpMenu} from "./ui/BurgerMenu";


export type TFaqItem = {
    question: string
    answer: JSX.Element
}
export type TFaqKey = Exclude<THelpMenuKeys, 'help'>

export type TFaq = Record<TFaqKey, {
    title: string
    faq: TFaqItem[]
}>

export type THelpMenu = typeof initialHelpMenu
export type THelpMenuKeys = keyof THelpMenu