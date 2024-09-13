import {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import Icon from 'shared/assets/icons/arrow_back.svg?react';
import s from "./UpButton.module.scss";


type UpButtonProps = {
    isShow: boolean
}

export function UpButton({isShow}: UpButtonProps) {
    const buttonRef = useRef(null);

    return (
        <CSSTransition
            in={isShow}
            timeout={200}
            classNames={'transition-up-button'}
            unmountOnExit
            nodeRef={buttonRef}
        >
            <button ref={buttonRef} className={s._} onClick={() => scrollTo({top: 0})}><Icon/></button>
        </CSSTransition>
    );
}
