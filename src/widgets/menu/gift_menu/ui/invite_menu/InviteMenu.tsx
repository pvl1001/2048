import cashImg from 'shared/assets/images/more_cash.webp';
import {ScrollContent} from "shared/ui/scroll_content";
import s from "./InviteMenu.module.scss";
import {PromoCode} from "../promo_code/PromoCode";


type InviteMenuProps = {
    onCloseMenu: () => void
}

function InviteMenu({}: InviteMenuProps) {

    return (
        <>
            <ScrollContent className={s._} center>
                <h5 className={s.title}>Need more cash?</h5>
                <img className={s.image} src={cashImg} alt="cash"/>
                <p className={s.description_first}>Invited friends and get</p>
                <p className={s.text_bonus}>+1 BONUS CASH</p>
                <p className={s.description_second}>for each friend that joins!</p>
                <PromoCode.Copy/>
                <p className={s.note}>* up to 30 invites per player</p>
            </ScrollContent>
        </>
    );
}

export default InviteMenu;