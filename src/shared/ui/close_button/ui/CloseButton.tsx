import cn from "classnames";
import {ComponentProps} from "react";
import CloseIcon from 'shared/assets/icons/close.svg?react';
import s from 'shared/ui/close_button/ui/CloseButton.module.scss';


export function CloseButton({className, ...props}: ComponentProps<'button'>) {
    return (
        <button className={cn(s._, className)} {...props}>
            <CloseIcon/>
        </button>
    );
}
