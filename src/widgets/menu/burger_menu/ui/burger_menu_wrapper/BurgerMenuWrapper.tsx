import {memo, PropsWithChildren} from "react";
import {CSSTransition} from "react-transition-group";
import cn from "classnames";
import s from "./BurgerMenuWrapper.module.scss";
import MenuOverlay from "../../../ui/menu_overlay/MenuOverlay";


type BurgerMenuWrapperProps = {
    isShowMenu: boolean
    overlay?: boolean
    className?: string
}

function BurgerMenuWrapper({className, children, isShowMenu, overlay = true}: PropsWithChildren<BurgerMenuWrapperProps>) {
    return (
        <CSSTransition
            in={isShowMenu}
            classNames={'transition-menu-left'}
            timeout={200}
            unmountOnExit
        >
            <div className={s._}>
                {overlay && <MenuOverlay/>}
                <div className={cn(s.wrapper, className, overlay && s.shadow, 'menu')}>
                    {children}
                </div>
            </div>
        </CSSTransition>
    );
}

export default memo(BurgerMenuWrapper);