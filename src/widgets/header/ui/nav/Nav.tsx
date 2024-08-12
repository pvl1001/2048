import {select, useAppSelector} from "app/store";
import {Link} from "react-router-dom";
import BurgerIcon from 'shared/assets/icons/burger.svg';
import GiftIcon from 'shared/assets/icons/button_gift.png';
import UserIcon from 'shared/assets/icons/button_user.png';
import {RoutePaths} from "shared/common/RoutePaths";
import {UseMenu, useMenu} from "shared/lib/hooks";
import {ProfileCurrency} from "shared/model/profile";
import NavButton from "shared/ui/nav_button";
import {Menu} from "widgets/menu";
import {Notifications} from "widgets/notifications";
import s from './Nav.module.scss';
import ProgressBar from "./progress_bar/ProgressBar";


function Nav() {
    let {isShowMenu, onOpenMenu, onCloseMenu}: UseMenu = useMenu();
    let isAuth: boolean = useAppSelector(select.profile._isAuth);
    let profileCurrency: ProfileCurrency = useAppSelector(select.profile._currency);

    return (
        <div className={s._}>
            <nav className={s.wrapper}>
                <NavButton
                    svgPath={BurgerIcon}
                    className={s.nav_button}
                    onClick={() => onOpenMenu('burger')}
                />
                <p>2048 BLOCKS</p>

                <div className={s.buttons}>

                    {isAuth
                        ? <>
                            <ProgressBar currency={profileCurrency}/>

                            <NavButton
                                svgPath={GiftIcon}
                                onClick={() => onOpenMenu('gift')}
                            />
                            <Notifications/>

                            <NavButton svgPath={UserIcon} onClick={() => onOpenMenu('user')}/>
                        </>
                        : <div className={s.buttons_auth}>
                            <Link to={RoutePaths.REGISTRATION}>Registration</Link>
                            <Link to={RoutePaths.LOGIN}>Log In</Link>
                        </div>
                    }
                </div>
            </nav>

            <Menu.Burger
                isShowMenu={isShowMenu.burger}
                onCloseMenu={() => onCloseMenu('burger')}
            />

            <Menu.User
                isShowMenu={isShowMenu.user}
                onCloseMenu={() => onCloseMenu('user')}
                className={s.menu_user}
            />
            <Menu.Gift
                isShowMenu={isShowMenu.gift}
                onCloseMenu={() => onCloseMenu('gift')}
                className={s.menu_gift}
            />
        </div>
    );
}

export default Nav;