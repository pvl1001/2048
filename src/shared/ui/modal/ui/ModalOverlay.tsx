import cn from "classnames";
import {FC} from "react";
import {useOverlay} from "../lib/useOverlay";
import s from "./Modal.scss";


interface IModalOverlayProps {
    opacity?: number;
    disabledEventOverlay?: boolean;
}

export const ModalOverlay: FC<IModalOverlayProps> = ({disabledEventOverlay, opacity = 0.8}) => {
    let {onClose} = useOverlay();

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
