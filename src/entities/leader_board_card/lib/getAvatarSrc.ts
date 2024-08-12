import {avatars} from "shared/assets/images/avatars";
import {defaultAvatar} from "shared/lib/avatarNames";
import {TAvatarName} from "shared/model/profile";


export function getAvatarSrc(avatarName: TAvatarName | undefined): string {
    return avatars[avatarName || defaultAvatar];
}
