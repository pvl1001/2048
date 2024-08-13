import {useMenu, UseMenu} from "shared/lib/hooks";
import {UserAvatar} from "./user_avatar";
import s from "./UserMenu.scss";
import {Menu} from "../";
import {BlockTabs} from "../ui/block_tabs/BlockTabs";


function UserMenu() {
    const {onCloseMenu: onCloseProfile, isShowMenu, onOpenMenu}: UseMenu = useMenu();

    return (
        <>
            <div className={s.block_avatar}>
                <UserAvatar onClick={() => onOpenMenu('profile')}/>
            </div>

            <BlockTabs/>

            <Menu.Profile
                isShowMenu={isShowMenu.profile}
                onCloseMenu={() => onCloseProfile('profile')}
                className={s.profile_menu}
                isContext
            />
        </>
    );
}

export default UserMenu;