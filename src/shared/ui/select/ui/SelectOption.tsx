import {InputHTMLAttributes} from "react";
import cn from "classnames";
import s from "./select_option/SelectOption.module.scss";
import {TSelectOption} from "../types";


type SelectOptionProps = InputHTMLAttributes<HTMLInputElement> & {
    option: TSelectOption,
    name: string
}

export function SelectOption({option, name, ...inputProps}: SelectOptionProps) {
    return (
        <label className={cn(s._, {
            [s.disabled]: inputProps.disabled
        })}>
            <input type="radio" name={name} {...inputProps}/>

            <div className={s.option}>
                {option.icon && <img src={option.icon} alt={'icon ' + option.icon}/>}
                <span>{option.title}</span>
                <div className={s.check}/>
            </div>

        </label>
    );
}
