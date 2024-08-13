import cn from "classnames";
import {RoutePaths} from "shared/common/RoutePaths";
import {UseNavigateModal, useNavigateModal} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import s from "./ModalWarning.scss";
import {data, Warnings} from "../lib/consts";


type ModalWarningProps = {
    theme: Warnings
}

export function ModalWarning({theme}: ModalWarningProps) {
    const {closeModal}: UseNavigateModal = useNavigateModal();

    return (
        <div className={cn(s._, s[theme])}>
            <div className={s.image_container}>
                <img src={data[theme].image} alt={theme + ' image'}/>
            </div>

            <div className={s.text}>
                <p className={s.text__text}>{data[theme].text}</p>

                {theme !== 'unfrozen' &&
                    <p className={s.text__link}>
                        <a href={RoutePaths.CONTACT} target="_blank" rel="noreferrer">Contact our support</a>
                    </p>}
            </div>

            <Button className={s.button} onClick={closeModal}>Ok</Button>
        </div>
    );
}
