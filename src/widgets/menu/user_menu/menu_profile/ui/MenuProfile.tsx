import {EditProfileFrom} from "features/edit_profile_form";
import {MenuTitle} from "shared/ui/menu_title";
import {ScrollContent} from "shared/ui/scroll_content";
import s from './MenuProfile.scss';


type Props = {
    onCloseMenu: () => void
}

export function MenuProfile({onCloseMenu}: Props) {
    return (
        <>
            <MenuTitle className={s.title}>Choose avatar:</MenuTitle>

            <ScrollContent className={s.scroll_content}>
                <EditProfileFrom onCloseMenu={onCloseMenu}/>
            </ScrollContent>
        </>
    );
}
