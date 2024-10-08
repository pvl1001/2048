import CrossIcon from 'shared/assets/icons/cross_error.svg?react';
import {useNavigateModal, UseNavigateModal} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import s from "./ModalError.module.scss";


type ModalErrorProps = {
    message?: string
}

export function ModalError({message}: ModalErrorProps) {
    const {closeModal}: UseNavigateModal = useNavigateModal();

    return (
        <>
            <CrossIcon className={s.icon}/>

            <p className={s.message}>
                {message || 'Unknown error...'}
            </p>

            <Button className={s.button} onClick={closeModal}>
                OK
            </Button>
        </>
    );
}
