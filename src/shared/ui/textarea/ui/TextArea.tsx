import {ComponentProps} from "react";
import cn from "classnames";
import s from "./TextArea.module.scss";


type TextAreaProps = ComponentProps<'textarea'> & {
    label: string
    error?: string
}

export function TextArea({label, error, ...props}: TextAreaProps) {
    const counter: number = (props.maxLength ?? 0) - (props.value as string).length;

    return (
        <div className={s._}>
            <p className={'label'}>{label}</p>

            <textarea
                {...props}
                className={cn({
                    [s.error]: error
                })}
            />
            <p className={s.counter}>{counter}</p>
        </div>

    );
}
