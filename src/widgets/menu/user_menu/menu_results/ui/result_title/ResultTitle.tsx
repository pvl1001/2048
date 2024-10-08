import {PropsWithChildren} from "react";
import cn from "classnames";
import s from "./ResultTitle.module.scss";


type ResultTitleProps = {
    className?: string
}

function ResultTitle({children, className}: PropsWithChildren<ResultTitleProps>) {
    return (
        <h5 className={cn(s._, className)}>
            {children}
        </h5>
    );
}

export default ResultTitle;