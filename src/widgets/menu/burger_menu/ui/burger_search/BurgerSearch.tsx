import cn from "classnames";
import {ChangeEvent, memo, useState} from "react";
import loupeImg from "shared/assets/icons/search-gray.webp";
import {debounce} from "shared/lib/Debounce";
import {StringUtils} from "shared/lib/StringUtils";
import {Input} from "shared/ui/input";
import faq from '../../lib/FAQ';
import {TFaqItem, TFaqKey} from "../../types";
import s from "./BurgerSearch.module.scss";


export type BurgerSearchProps = {
    onSearch: (result: TFaqItem[]) => void
    setValue: (value: string) => void
    faqKey?: TFaqKey
    className?: string
}

function BurgerSearch({onSearch, faqKey, className, setValue}: BurgerSearchProps) {
    let [questions] = useState<TFaqItem[]>(() => faqKey
        ? faq[faqKey].faq
        : Object.values(faq).map(el => el.faq).flat()
    );

    function onSubmit(value: string) {
        let result: TFaqItem[] = questions.filter(item => item.question.toLowerCase().includes(value.toLowerCase()));
        onSearch(result);
    }

    return (
        <form className={cn(s._, className)} onSubmit={e => e.preventDefault()}>
            <Input
                placeholder={'Search...'}
                autoComplete={'off'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    let value: string = StringUtils.removeSpaces(e.target.value);
                    debounce(() => onSubmit(value), 300);
                    return setValue(value);
                }}
            />
            <img className={s.submit_button} src={loupeImg} alt={'loupe'}/>
        </form>
    );
}

export default memo(BurgerSearch);