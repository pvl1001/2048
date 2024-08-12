import {select, useAppSelector} from "app/store";
import {avatars} from "shared/assets/images/avatars";
import {TAvatarName} from "shared/model/profile";
import AvatarButton from "./avatar_button/AvatarButton";
import s from "./UserAvatar.scss";


type UserAvatarProps = {
    onClick: () => void
}

export function UserAvatar({onClick}: UserAvatarProps) {
    let profileAvatarId: TAvatarName = useAppSelector(select.profile._avatarId);
    let profileName: string = useAppSelector(select.profile._name);
    let profileId: string = useAppSelector(select.profile._id);

    return (
        <div className={s._}>

            <div className={s.avatar}>
                <img src={avatars[profileAvatarId]} alt="avatar"/>
                <AvatarButton className={s.btn} onClick={onClick}/>
            </div>

            <p className={s.name}>{profileName}</p>
            <p className={s.id}>id:{profileId}</p>

        </div>
    );
}
