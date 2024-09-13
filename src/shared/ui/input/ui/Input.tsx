import {InputHTMLAttributes, useState} from "react";
import cn from "classnames";
import {TooltipError} from "shared/ui/tooltip_error";
import s from "./Input.module.scss";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string
    code?: string
    error?: string
    className?: string
    icon?: JSX.Element
    isBigStyle?: boolean
}

export function Input({isBigStyle, className, label, code, error, icon, ...inputProps}: InputProps) {
    const [isFocus, setIsFocus] = useState(false);

    function onFocus(e: any) {
        inputProps.onFocus?.(e);
        setIsFocus(true);
    }

    function onBlur(e: any) {
        inputProps.onBlur?.(e);
        setIsFocus(false);
    }

    return (
        <div className={cn(s._, className, isBigStyle && s._big)}>
            <p className={'label'}>{label}</p>

            <div className={cn(s.input, {
                [s.with_code]: code,
                [s.input_error]: error,
                [s.blur]: !isFocus && !inputProps.value,
            })}>

                {code && <p className={s.code}>{code}</p>}

                <input
                    type={'text'}
                    placeholder=" "
                    {...inputProps}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />

                {icon && <div className={s.icon}>{icon}</div>}

                {error && <TooltipError content={error} className={cn(s.icon_error, icon && s.icon_error_with_icon)}/>}
            </div>
        </div>
    );
}
