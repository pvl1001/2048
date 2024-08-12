import {SupportForm} from "features/support_form";
import s from "./ModalSupport.scss";


export function ModalSupport() {
    return (
        <div className={s._}>
            <p className={s.description}>Please enter your email address so we can send a reply there:</p>
            <SupportForm/>
        </div>
    );
}
