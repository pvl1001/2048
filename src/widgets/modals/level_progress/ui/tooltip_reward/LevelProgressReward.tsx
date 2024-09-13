import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {CSSProperties, useMemo} from "react";
import DoneIcon from 'shared/assets/icons/check.svg?react';
import coinImg from 'shared/assets/icons/coin.png';
import dollarImg from 'shared/assets/icons/dollar.png';
import {Mask} from "shared/lib/Mask";
import s from "./LevelProgressReward.module.scss";


type TooltipRewardProps = {
    level: number
    isCurrentLevel: boolean
    isActive?: boolean
    isDone?: boolean
    hasClaim?: boolean
}

function LevelProgressReward({level, isActive, isDone, hasClaim, isCurrentLevel}: TooltipRewardProps) {
    const percent: number = useAppSelector(select.profile._progressPercent);
    // percent = 0;
    const currentReward = useAppSelector(select.config._getCurrentReward(level));
    const isCoin: boolean = 'soft' in currentReward;
    const value: number = currentReward.soft || +Mask.hardCurrency(currentReward.bonus);

    const levelProgressWidth = useMemo(() => {
        if (isCurrentLevel) {
            return percent;
        }
        if (isActive) {
            return 100;
        }
        return 0;
    }, [isDone, isCurrentLevel, percent]);

    return (
        <li className={cn(s._, {
            [s._active]: isActive,
            [s._done]: isDone,
            [s._claim]: hasClaim,
        })}>

            <div className={s.tooltip_reward}>
                {isCoin
                    ? <img className={s._coin} src={coinImg} alt="coin reward"/>
                    : <img className={s._dollar} src={dollarImg} alt="dollar reward"/>
                }
                <span className={s.currency}>
                        {isDone
                            ? <DoneIcon className={s.done_icon}/>
                            : <>{value}{!isCoin && '$'}</>
                        }
                </span>
            </div>


            <div className={cn(s.progress_container, s['level_' + level])}>
                <div className={s.level_number}>{level}</div>
                <div
                    className={s.progress_line}
                    style={{'--percent': levelProgressWidth + '%'} as CSSProperties}
                />
            </div>

        </li>
    );
}

export default LevelProgressReward;