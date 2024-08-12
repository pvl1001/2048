import React, {useRef} from "react";
import {CSSTransition} from "react-transition-group";
import MenuWrapper from "./menu_wrapper/MenuWrapper";


type Props = {
    onCloseMenu: () => void
    isShowMenu: boolean
    isContext?: boolean
    className?: string
}

export let withMenu = (WrappedComponent: (props: Props) => JSX.Element | null) => (props: Props) => {
    let transitionRef = useRef(null);

    return <CSSTransition
        in={props.isShowMenu}
        ref={transitionRef}
        classNames={'transition-menu'}
        timeout={200}
        unmountOnExit
    >
        <MenuWrapper onCloseMenu={props.onCloseMenu} className={props.className} isContext={props.isContext}>
            <WrappedComponent {...props}/>
        </MenuWrapper>
    </CSSTransition>;
};