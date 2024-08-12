import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {useState} from "react";
import {ConfigDailyReward} from "shared/api/adapters";
import {ReactComponent as DoneIcon} from 'shared/assets/icons/check.svg';
import coinImg from 'shared/assets/icons/coin.png';
import coinsImg from 'shared/assets/icons/coins.png';
import dollarImg from 'shared/assets/icons/dollar.png';
import dollarsImg from 'shared/assets/icons/dollars.png';
import expStarImg from 'shared/assets/icons/star_xp.png';
import {Mask} from "shared/lib/Mask";
import {ProfileDailyRewards} from "shared/model/profile";
import s from "./DailyCard.scss";


type DailyCardProps = {
    day: number
    currentDay: number
    rewardDay: number
}

export function DailyCard({day, currentDay, rewardDay}: DailyCardProps) {
    let {exp, bonus, soft}: ConfigDailyReward = useAppSelector(select.config._getDailyReward(day));
    let {rewardDays}: ProfileDailyRewards = useAppSelector(select.profile._dailyRewards);
    let status = rewardDays?.[day];
    let expTemplate: string = exp ? exp + '%' : '';
    let bonusTemplate: string = bonus ? Mask.hardCurrency(+bonus) + '$' : '';
    let [isToday] = useState(day === currentDay);
    let [isDone] = useState(status === 0);
    let [isMiss] = useState(day < currentDay && status === undefined);
    let [isTodayClass] = useState((rewardDay === day) || (isToday && status));

    return (
        <li className={cn(s._, s['_' + day], {
            [s._today]: isTodayClass,
            [s._active]: status,
            [s._done]: isDone || isMiss,
        })}>
            <div className={s.image_container}>
                <p className={s.day}>
                    {isToday
                        ? 'Today'
                        : 'Day ' + day
                    }
                </p>
                {soft && exp && bonus
                    ? <div className={cn(s.image_day, s.image_day_all)}>
                        <img className={s._exp} src={expStarImg} alt="exp star"/>
                        <img className={s._dollars} src={dollarsImg} alt="dollars"/>
                        <img className={s._coins} src={coinsImg} alt="coins"/>
                    </div>
                    : <div className={s.image_day}>
                        {exp && <img className={s._exp} src={expStarImg} alt="exp star"/>}
                        {bonus && <img className={s._dollar} src={dollarImg} alt="dollar"/>}
                        {soft && day !== 1 && <img className={s._coins} src={coinsImg} alt="coins"/>}
                        {soft && day === 1 && <img className={s._coin} src={coinImg} alt="coin"/>}
                    </div>}
            </div>

            {soft && exp && bonus
                ? <div className={cn(s.count, s.count_all)}>
                    <span>{expTemplate}</span>
                    <span>{bonusTemplate}</span>
                    <span>{soft}</span>
                </div>
                : <div className={s.count}>
                    {isMiss ? 'Miss' : isDone ? <DoneIcon className={s.done_icon}/> : `${expTemplate}${bonusTemplate}${soft}`}
                </div>
            }
        </li>
    );
}
