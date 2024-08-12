import {InputHTMLAttributes} from "react";
import {ReactComponent as CheckIcon} from 'shared/assets/icons/check.svg';
import {avatars} from "shared/assets/images/avatars";
import {TAvatarName} from "shared/model/profile";
import s from "./AvatarCard.scss";


function AvatarCard(props: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <label className={s._}>
            <input type="radio" name="avatar" {...props}/>
            <div>
                <div className={s.green_round}><CheckIcon/></div>
            </div>
            <img className={s.img_avatar} src={avatars[props.value as TAvatarName]} alt="avatar"/>
        </label>
    );
}

export default AvatarCard;