import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {SignOut} from "features/auth";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {CloseButton} from "shared/ui/close_button";
import BurgerMenuWrapper from "../burger_menu_wrapper/BurgerMenuWrapper";
import s from "../BurgerMenu.scss";


type BurgerMainMenuProps = {
    isShowMenu: boolean
    showHelpMenu: () => void
    onBack: () => void
}

export function BurgerMainMenu({showHelpMenu, ...props}: BurgerMainMenuProps) {
    let {navigateModal} = useNavigateModal();
    let isAuth: boolean = useAppSelector(select.profile._isAuth);

    return (
        <BurgerMenuWrapper {...props}>
            <div className={s._}>
                <CloseButton className={s.back_button} onClick={props.onBack}/>
                <ul className={cn(s.list, s.main_list)}>
                    <li onClick={() => navigateModal(RoutePaths.HOW_TO_PLAY)}>How to play</li>
                    <li onClick={showHelpMenu}>Help</li>
                </ul>

                {isAuth && <SignOut/>}
            </div>
        </BurgerMenuWrapper>
    );
}
