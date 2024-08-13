import {PropsWithChildren} from "react";
import cn from "classnames";
import s from "./MenuTitle.scss";


type MenuTitleProps = {
    className?: string
}

export function MenuTitle({children, className}: PropsWithChildren<MenuTitleProps>) {
    return (
        <h4 className={cn(s._, className)}>
            {children}
        </h4>
    );
}
