import cn from "classnames";
import {ComponentProps} from "react";
import ArrowIcon from 'shared/assets/icons/arrow_back.svg?react';
import s from "./ButtonBack.module.scss";


export function ButtonBack({className, ...props}: ComponentProps<'button'>) {
    return (
        <button type="button" className={cn(s._, className)} {...props}>
            <ArrowIcon/>
        </button>
    );
}

