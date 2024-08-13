import {PropsWithChildren} from "react";
import {useLocation} from "react-router-dom";
import cn from "classnames";
import successMascot from "shared/assets/images/cube/success_mascot.webp";
import {useChildrenWithProps} from "shared/lib/hooks";
import s from './Modal.scss';
import {ModalHead} from "./modal_head/ModalHead";
import {ModalWrapper} from "./ModalWrapper";


type ModalProps = {
    title?: string
    className?: string
    disabledEventOverlay?: boolean
    withMascot?: boolean
}

export function Modal({children, title, className, disabledEventOverlay, withMascot}: PropsWithChildren<ModalProps>) {
    const location = useLocation();

    return (
        <ModalWrapper className={cn(className, {
            [s.mascot]: withMascot,
        })} disabledEventOverlay={disabledEventOverlay}>
            <ModalHead>{title}</ModalHead>

            <div className={cn(s.content, {
                [s.mascot_content]: withMascot,
            })}>

                {withMascot &&
                    <img
                        src={successMascot}
                        className={s.mascot_img}
                        alt={"success mascot"}
                    />
                }

                {useChildrenWithProps(children, location.state)}
            </div>
        </ModalWrapper>
    );
}
