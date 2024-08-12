import {ReactComponent as ArrowIcon} from 'shared/assets/icons/arrow_back.svg';
import cn from "classnames";
import {ComponentProps} from "react";
import s from "./ButtonBack.module.scss";


export function ButtonBack({className, ...props}: ComponentProps<'button'>) {
    return (
        <button type="button" className={cn(s._, className)} {...props}>
            <ArrowIcon/>
        </button>
    );
}

