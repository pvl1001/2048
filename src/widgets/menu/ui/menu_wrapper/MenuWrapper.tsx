import {PropsWithChildren} from "react";
import cn from "classnames";
import {ButtonBack} from "shared/ui/button_back";
import {CloseButton} from "shared/ui/close_button";
import s from "./MenuWrapper.module.scss";
import MenuOverlay from "../menu_overlay/MenuOverlay";


type MenuWrapperProps = {
    onCloseMenu: () => void
    isContext?: boolean
    className?: string
}

function MenuWrapper({children, onCloseMenu, className, isContext}: PropsWithChildren<MenuWrapperProps>) {
    return (
        <div className={s._}>
            {!isContext && <MenuOverlay/>}

            <div className={cn(isContext ? s.menu_context : s.menu, className, 'menu')}>
                {isContext
                    ? <ButtonBack className={s.back_button} onClick={onCloseMenu}/>
                    : <CloseButton className={s.close_button} onClick={onCloseMenu}/>
                }
                {children}
            </div>
        </div>
    );
}

export default MenuWrapper;