import {ComponentProps} from "react";
import cn from "classnames";
import {ReactComponent as CloseIcon} from 'shared/assets/icons/close.svg';
import s from 'shared/ui/close_button/ui/CloseButton.module.scss';


export function CloseButton({className, ...props}: ComponentProps<'button'>) {
    return (
        <button className={cn(s._, className)} {...props}>
            <CloseIcon/>
        </button>
    );
}
