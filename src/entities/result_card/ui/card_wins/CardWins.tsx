import classNames from "classnames";
import peopleIcon from 'shared/assets/icons/people.png';
import {MatchState} from "shared/common/MatchState";
import s from "./CardWins.module.scss";
import MatchDate from "./match_date/MatchDate";


type CardWinsProps = {
    state: MatchState
    date: number
    playersCount: number
    disbanded?: boolean
    onClick?: () => void
}

export function CardWins({state, date, playersCount, disbanded, onClick}: CardWinsProps) {

    return (
        <div className={s._}>
            <div className={s.grow}>

                <h5 className={s.title}>Prosperous wins</h5>

                <div className={s.row}>
                    <div className={classNames(s.players, s.blue_container)}>
                        <img src={peopleIcon} alt="players"/>
                        {playersCount}
                    </div>
                    <MatchDate
                        className={s.blue_container}
                        state={state}
                        date={date}
                    />
                </div>

            </div>

            {disbanded
                ? <p className={s.disabled_text}>No participants</p>
                : <p className={s.leaderboard} onClick={onClick}>Leaderboard</p>
            }

        </div>
    );
}
