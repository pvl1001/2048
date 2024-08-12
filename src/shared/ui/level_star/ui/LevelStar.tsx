import cn from "classnames";
import StarIcon from "shared/assets/icons/star.png";
import s from "./LevelStar.module.scss";


type LevelStarProps = {
    level: number
    className?: string
}

export function LevelStar({level, className}: LevelStarProps) {
    return (
        <div className={cn(className, s._)}>
            <img src={StarIcon} alt="star" className={s.star}/>
            <span className={s.star_level}>{level}</span>
        </div>
    );
}

