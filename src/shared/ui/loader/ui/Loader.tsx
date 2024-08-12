import classNames from "classnames";
import s from "./Loader.module.scss";


type LoaderProps = {
    className?: string
    theme?: 'modal' | 'button'
}

export function Loader({className, theme}: LoaderProps) {
    return (
        <div className={classNames(s._, className, {
            [s.button]: theme === 'button',
            [s.modal]: theme === 'modal',
        })}>
            <ul className={s.loader}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    );
}
