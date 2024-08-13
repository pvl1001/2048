import {BurgerMenu} from "./burger_menu";
import GiftMenu from "./gift_menu/ui/GiftMenu";
import InviteMenu from "./gift_menu/ui/invite_menu/InviteMenu";
import {withMenu} from "./ui/WithMenu";
import {MenuProfile} from "./user_menu/menu_profile";
import LeaderBoard from "./user_menu/menu_results/ui/leader_board/LeaderBoard";
import UserMenu from "./user_menu/UserMenu";


export const Menu = {
    Burger: BurgerMenu,
    User: withMenu(UserMenu),
    Gift: withMenu(GiftMenu),
    Invite: withMenu(InviteMenu),
    LeaderBoard: withMenu(LeaderBoard),
    Profile: withMenu(MenuProfile),
};
