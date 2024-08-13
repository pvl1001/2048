import {Link} from "react-router-dom";
import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {RoutePaths} from "shared/common/RoutePaths";
import {LevelStar} from "shared/ui/level_star";
import s from "../ProgressBar.module.scss";


export function Level() {
    const {maxLevel} = useAppSelector(select.config._storeLevelConfig);
    const percent: number = useAppSelector(select.profile._progressPercent);
    const level: number = useAppSelector(select.profile._level);

    return (
        <Link to={RoutePaths.LEVEL_PROGRESS} replace className={cn(s.bar, s.star)}>
            <LevelStar level={level} className={s.star_level}/>
            <div className={s.progress_container}>
                <div className={s.progress} style={{width: percent + '%'}}/>
                <div className={s.percent_value}>
                    {maxLevel === level || percent >= 100
                        ? 'Max'
                        : <>{percent.toFixed()}%</>}</div>
            </div>
        </Link>
    );
}
