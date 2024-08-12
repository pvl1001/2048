import classNames from "classnames";
import {ButtonHTMLAttributes, forwardRef, Ref} from "react";
import s from './NavButton.scss';


type NavButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    svgPath: string
    className?: string
    isActive?: boolean
}

function NavButton({className = '', svgPath, isActive, ...props}: NavButtonProps, ref: Ref<HTMLButtonElement>) {
    return (
        <button ref={ref} type="button" className={classNames(s._, className, isActive && s.active)} {...props}>
            <img src={svgPath} alt="navigation button"/>
        </button>
    );
}

export default forwardRef(NavButton);