import {PropsWithChildren} from "react";
import cn from "classnames";
import cubeImg from "shared/assets/images/cube/cube_register-now.webp";
import {ModalWrapper} from "shared/ui/modal";
import s from "./ModalCube.scss";


type Props = {
    className?: string
    withoutOverlay?: boolean
    disabledEventOverlay?: boolean
}

export function ModalCube({children, className, withoutOverlay, disabledEventOverlay}: PropsWithChildren<Props>) {
    return (
        <ModalWrapper
            className={cn(s._, className)}
            withoutOverlay={withoutOverlay}
            disabledEventOverlay={disabledEventOverlay}
        >
            <div className={s.img_container}>
                <img src={cubeImg} alt="cube register now"/>
            </div>
            <div className={cn(s.content, 'content')}>
                {children}
            </div>
        </ModalWrapper>
    );
}
