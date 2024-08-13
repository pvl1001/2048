import {useState} from "react";
import {MenuName, TMenu} from "../types";


export type UseMenu = {
    isShowMenu: TMenu
    onOpenMenu: (menuName: MenuName) => void
    onCloseMenu: (menuName: MenuName) => void
}

export function useMenu(): UseMenu {
    const [isShowMenu, setIsShowMenu] = useState<TMenu>({
        burger: false,
        user: false,
        gift: false,
        result: false,
        profile: false,
        invite: false,
    });

    function onOpenMenu(menuName: MenuName): void {
        setIsShowMenu(prev => ({...prev, [menuName]: true}));
    }

    function onCloseMenu(menuName: MenuName): void {
        setIsShowMenu(prev => ({...prev, [menuName]: false}));
    }

    return {isShowMenu, onOpenMenu, onCloseMenu};
}
