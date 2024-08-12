import {ReactComponent as CheckIcon} from 'shared/assets/icons/check.svg';
import {useNavigateModal} from "shared/lib/hooks";
import {ModalWrapper} from "shared/ui/modal";
import s from "./SupportSuccess.scss";


export function SupportSuccess() {
    let {closeModal} = useNavigateModal();
    return (
        <ModalWrapper className={s._} onClick={closeModal}>
            <CheckIcon className={s.icon}/>
            <p>Message sent successfully!</p>
        </ModalWrapper>
    );
}
