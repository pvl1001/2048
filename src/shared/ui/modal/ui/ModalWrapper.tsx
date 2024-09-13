import React, {PropsWithChildren} from "react";
import {createPortal} from "react-dom";
import cn from "classnames";
import s from "./Modal.module.scss";
import {ModalOverlay} from "./ModalOverlay";


type ModalWrapperProps = {
    className?: string
    onClick?: () => void
    disabledEventOverlay?: boolean
    withoutOverlay?: boolean
}

export function ModalWrapper({disabledEventOverlay, withoutOverlay, className, onClick, children}: PropsWithChildren<ModalWrapperProps>) {

    return createPortal(
        <div className={cn(s._, className, 'modal')} onClick={onClick}>
            <div className={cn(s.container, 'modal-container')}>
                {children}
            </div>
            {!withoutOverlay && <ModalOverlay disabledEventOverlay={disabledEventOverlay}/>}
        </div>
        , document.getElementById('modal') as HTMLElement
    );
}
