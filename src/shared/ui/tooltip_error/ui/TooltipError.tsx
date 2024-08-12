import Tippy, {TippyProps} from "@tippyjs/react";
import classNames from "classnames";
import s from "./TooltipError.module.scss";


type TooltipErrorProps = TippyProps & {content: TippyProps['content']}

export function TooltipError({className, ...props}: TooltipErrorProps) {
    let settings: TippyProps = {
        ...props,
        className: s.tippy,
        theme: 'light',
        interactive: true,
        delay: 100,
        maxWidth: 'none'
    };

    return (
        <Tippy {...settings}>
            <div className={classNames(s._, className)}>!</div>
        </Tippy>
    );
}
