import cn from "classnames";
import {PropsWithChildren} from "react";
import {Button, ButtonProps} from "shared/ui/button";
import {TooltipError} from "shared/ui/tooltip_error";
import s from "./ButtonWithTooltip.module.scss";


export type ButtonWithTooltipProps = ButtonProps & {
    error: string | undefined
}

export function ButtonWithTooltip({children, error, ...props}: PropsWithChildren<ButtonWithTooltipProps>) {
    return (
        <div className={cn(s.container, props.className)}>
            <Button {...props} disabled={props.disabled || !!error}>
                {children}
            </Button>

            {!!error &&
                <TooltipError
                    content={<p className={s.error_text}>{error}</p>}
                    className={s.error}
                />
            }
        </div>
    );
}