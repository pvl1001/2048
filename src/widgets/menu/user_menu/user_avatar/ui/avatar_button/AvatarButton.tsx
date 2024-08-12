import {ButtonHTMLAttributes} from "react";
import pencilImg from "shared/assets/icons/pencil.svg";
import s from "./AvatarButton.scss";


function AvatarButton({className = '', ...props}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={`${s._} ${className}`} {...props}>
            <img src={pencilImg} alt="button pencil"/>
        </button>
    );
}

export default AvatarButton;