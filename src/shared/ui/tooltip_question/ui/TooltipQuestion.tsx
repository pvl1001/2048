import Tippy, {TippyProps} from "@tippyjs/react";
import classNames from "classnames";
import s from "./TooltipQuestion.module.scss";


export function TooltipQuestion({className, ...props}: TippyProps) {

    let settings: TippyProps = {
        theme: 'light',
        maxWidth: '38.6rem',
        ...props
    };

    return (
        <Tippy {...settings}>
            <button type={"button"} className={classNames(s._, className)}>?</button>
        </Tippy>
    );
}

