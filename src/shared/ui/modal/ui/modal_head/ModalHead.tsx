import cn from "classnames";
import React, {PropsWithChildren} from "react";
import {useLocation} from "react-router-dom";
import {ReactComponent as CloseIcon} from 'shared/assets/icons/close.svg';
import {useNavigateModal} from "shared/lib/hooks";
import s from "./ModalHead.module.scss";


type ModalHeadProps = {
    theme?: 'default' | 'blue'
}

export function ModalHead({children, theme = 'default'}: PropsWithChildren<ModalHeadProps>) {
    let {closeModal} = useNavigateModal();
    let location = useLocation();

    return (
        <div className={cn(s._, s[theme])}>
            <h2 className={s.title}>{location.state?.title ?? children}</h2>
            <button className={s.close_btn} onClick={closeModal}>
                <CloseIcon/>
            </button>
        </div>
    );
}
