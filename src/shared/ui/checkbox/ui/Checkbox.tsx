import cn from "classnames";
import {ComponentProps} from "react";
import Icon from 'shared/assets/icons/check.svg?react';
import s from "./Checkbox.module.scss";


export function Checkbox({className, ...props}: ComponentProps<'input'>) {
    return (
        <label className={cn(s._, className)}>
            <input type="checkbox" {...props}/>
            <div><Icon/></div>
        </label>
    );
}

