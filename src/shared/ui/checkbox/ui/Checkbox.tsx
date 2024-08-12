import {ReactComponent as Icon} from 'shared/assets/icons/check.svg';
import cn from "classnames";
import {ComponentProps} from "react";
import s from "./Checkbox.module.scss";


export function Checkbox({className, ...props}: ComponentProps<'input'>) {
    return (
        <label className={cn(s._, className)}>
            <input type="checkbox" {...props}/>
            <div><Icon/></div>
        </label>
    );
}

