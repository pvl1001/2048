import {PropsWithChildren} from "react";
import s from "./DevelopDescription.module.scss";


export function DevelopDescription({children}: PropsWithChildren) {
    return (
        <div className={s._}>
            {children}
        </div>
    );
}
