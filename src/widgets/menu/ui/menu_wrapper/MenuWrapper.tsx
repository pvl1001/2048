import cn from "classnames";
import {PropsWithChildren} from "react";
import {ButtonBack} from "shared/ui/button_back";
import {CloseButton} from "shared/ui/close_button";
import MenuOverlay from "../menu_overlay/MenuOverlay";
import s from "./MenuWrapper.module.scss";


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