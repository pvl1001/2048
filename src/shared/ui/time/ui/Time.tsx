import React, {PropsWithChildren} from "react";
import cn from "classnames";
import clockImg from 'shared/assets/icons/clock.svg';
import s from "./Time.scss";


type Props = {
    className?: string
}

export function Time({children, className}: PropsWithChildren<Props>) {
    return (
        <div className={cn(s._, className)}>
            <img src={clockImg} alt="clock"/>
            {children}
        </div>
    );
}
