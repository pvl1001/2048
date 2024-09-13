import cn from "classnames";
import CloseIcon from 'shared/assets/icons/close.svg?react';
import fileBlueImg from 'shared/assets/icons/file_blue.png';
import fileRedImg from 'shared/assets/icons/file_red.png';
import {CloseButton} from "shared/ui/close_button";
import s from "./FileCard.module.scss";


export type FileCardProps = {
    open?: () => void
    removeCard?: () => void
    name?: string
    size?: number
    error?: string
}

function FileCard({name, size, error, open, removeCard}: FileCardProps) {
    const mb: number = Math.ceil((size ?? 0) / 1e6 * 10) / 10;
    const icon: string = error ? fileRedImg : fileBlueImg;

    return (
        <li className={cn(s._, {
            [s.empty]: !name,
            [s.error]: error,
        })} onClick={open}>
            {removeCard && <CloseButton onClick={removeCard} className={s.close_button}/>}
            {name
                ? <div className={s.text_container}>
                    <p className={s.name}><img src={icon} alt="file"/>{name}</p>
                    <p>{mb}MB</p>
                </div>
                : <CloseIcon className={s.plus_icon}/>
            }
        </li>
    );
}

export default FileCard;