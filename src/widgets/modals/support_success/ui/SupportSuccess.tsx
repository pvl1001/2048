import CheckIcon from 'shared/assets/icons/check.svg?react';
import {useNavigateModal} from "shared/lib/hooks";
import {ModalWrapper} from "shared/ui/modal";
import s from "./SupportSuccess.module.scss";


export function SupportSuccess() {
    const {closeModal} = useNavigateModal();
    return (
        <ModalWrapper className={s._} onClick={closeModal}>
            <CheckIcon className={s.icon}/>
            <p>Message sent successfully!</p>
        </ModalWrapper>
    );
}
