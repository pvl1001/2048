import {ChangeEvent, memo, useState} from "react";
import cn from "classnames";
import loupeImg from "shared/assets/icons/search-gray.webp";
import {debounce} from "shared/lib/Debounce";
import {StringUtils} from "shared/lib/StringUtils";
import {Input} from "shared/ui/input";
import s from "./BurgerSearch.module.scss";
import faq from '../../lib/FAQ';
import {TFaqItem, TFaqKey} from "../../types";


export type BurgerSearchProps = {
    onSearch: (result: TFaqItem[]) => void
    setValue: (value: string) => void
    faqKey?: TFaqKey
    className?: string
}

function BurgerSearch({onSearch, faqKey, className, setValue}: BurgerSearchProps) {
    const [questions] = useState<TFaqItem[]>(() => faqKey
        ? faq[faqKey].faq
        : Object.values(faq).map(el => el.faq).flat()
    );

    function onSubmit(value: string) {
        const result: TFaqItem[] = questions.filter(item => item.question.toLowerCase().includes(value.toLowerCase()));
        onSearch(result);
    }

    return (
        <form className={cn(s._, className)} onSubmit={e => e.preventDefault()}>
            <Input
                placeholder={'Search...'}
                autoComplete={'off'}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    const value: string = StringUtils.removeSpaces(e.target.value);
                    debounce(() => onSubmit(value), 300);
                    return setValue(value);
                }}
            />
            <img className={s.submit_button} src={loupeImg} alt={'loupe'}/>
        </form>
    );
}

export default memo(BurgerSearch);