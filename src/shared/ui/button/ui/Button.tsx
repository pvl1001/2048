import classNames from "classnames";
import {ComponentProps, PropsWithChildren} from "react";
import {Loader} from "../../loader/ui/Loader";
import s from "./Button.scss";


export type ButtonProps = ComponentProps<'button'> & {
    theme?: 'blue' | 'orange'
    isPending?: boolean
    currency?: string
}

export function Button({children, theme = 'blue', className, isPending, currency, ...props}: PropsWithChildren<ButtonProps>) {
    let classes: string = classNames(s._, className, {
        [s[theme]]: !props.disabled,
        [s.disabled]: isPending || props.disabled,
        [s.currency]: !!currency,
    });

    return <button type="button" className={classes} {...props}>
        <div className={s.container}>
            {isPending && <Loader theme={'button'}/>}
            <span style={{opacity: Number(!isPending)}}>{children}</span>
        </div>

        {(currency && !isPending) && <p className={s.currency__container}>+{currency}</p>}
    </button>;
}
