import cn from "classnames";
import React from "react";
import s from "./Currency.module.scss";


type CurrencyProps = {
    children: React.ReactNode,
    currency: 'money' | 'coin' | 'star'
    className?: string
    textColor?: 'default' | 'gold' | 'white'
}

export function Currency({children, className = '', currency, textColor = 'default'}: CurrencyProps) {
    return (
        <p className={cn(
            s._,
            className,
            s['color_' + textColor],
            currency && s[currency]
        )}>
            {children}
        </p>
    );
}
