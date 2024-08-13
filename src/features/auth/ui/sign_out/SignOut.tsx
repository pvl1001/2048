import {useAppDispatch} from "app/store";
import {wsNotificationActions} from "entities/notification";
import SignoutImg from "shared/assets/icons/4 1.webp";
import {Cookie} from "shared/lib/Cookie";
import {NotificationsUtils} from "shared/lib/NotificationsUtils";
import {TutorialUtils} from "shared/lib/TutorialUtils";
import s from "./SignOut.scss";


export function SignOut() {
    const dispatch = useAppDispatch();

    function onLogout() {
        Cookie.delete('token');
        open(process.env.BASEPATH, '_self');
        dispatch(wsNotificationActions.close());
        TutorialUtils.clearTutorialStorage();
        NotificationsUtils.clearStorage();
    }

    return (
        <button className={s._} onClick={onLogout}>
            <img src={SignoutImg} alt="sign out"/><span>Sign out</span>
        </button>
    );
}
