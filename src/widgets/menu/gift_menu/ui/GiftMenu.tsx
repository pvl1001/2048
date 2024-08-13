import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {UseMenu, useMenu} from "shared/lib/hooks";
import {thunkGetProfile} from "shared/model/profile";
import {ScrollContent} from "shared/ui/scroll_content";
import {GiftCard} from "./gift_card";
import s from "./GiftMenu.module.scss";
import {PromoCode} from "./promo_code/PromoCode";
import {Menu} from "../../";


function GiftMenu() {
    const dispatch = useAppDispatch();
    const {isShowMenu, onOpenMenu, onCloseMenu}: UseMenu = useMenu();
    const isAuth: boolean = useAppSelector(select.profile._isAuth);

    useEffect(() => {
        isAuth && dispatch(thunkGetProfile());
    }, []);

    return (
        <>
            <ScrollContent className={s.content}>
                <ul className={s.card_list}>
                    <GiftCard.Daily/>
                    <GiftCard.Invite onClick={() => onOpenMenu('invite')}/>
                </ul>

                <PromoCode.Submit/>
            </ScrollContent>

            <Menu.Invite
                isContext
                isShowMenu={isShowMenu.invite}
                onCloseMenu={() => onCloseMenu('invite')}
                className={s.invite_menu}
            />
        </>
    );
}

export default GiftMenu;