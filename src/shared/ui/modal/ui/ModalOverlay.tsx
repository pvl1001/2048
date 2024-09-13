import {FC} from "react";
import cn from "classnames";
import s from "./Modal.module.scss";
import {useOverlay} from "../lib/useOverlay";


interface IModalOverlayProps {
    opacity?: number;
    disabledEventOverlay?: boolean;
}

export const ModalOverlay: FC<IModalOverlayProps> = ({disabledEventOverlay, opacity = 0.8}) => {
    const {onClose} = useOverlay();

    function onClick() {
        if (!disabledEventOverlay) {
            onClose();
        }
    }

    return (
        <div
            className={cn(s.overlay, 'overlay')}
            style={{opacity}}
            onClick={onClick}
        />
    );
};
