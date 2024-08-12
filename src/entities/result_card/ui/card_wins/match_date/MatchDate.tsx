import classNames from "classnames";
import {Dayjs} from "dayjs";
import {ReactNode} from "react";
import clockIcon from "shared/assets/icons/clock.svg";
import {MatchState} from "shared/common/MatchState";
import {DateUtils} from "shared/lib/DateUtils";
import s from "./MatchDate.scss";


type MatchDateProps = {
    state: MatchState
    date: number
    className?: string
}

function MatchDate({state, date, className = ''}: MatchDateProps) {
    let matchDate: Dayjs = DateUtils.getDateFromUnix(date);
    let format: string = 'DD.MM.YYYY';
    let isToday: boolean = DateUtils.now().format(format) === matchDate.format(format);
    let hours: string = DateUtils.getDiff({endDate: matchDate,}).format('H:mm');

    let matchState: ReactNode = state === MatchState.ONGOING
        ? <>Ongoing</>
        : isToday
            ? <><b>{hours}</b> min ago</>
            : <>{matchDate.format(format)}</>;

    return (
        <div className={classNames(s._, className)}>
            <img src={clockIcon} alt="clock"/>
            <p className={s.text}>{matchState}</p>
        </div>
    );
}

export default MatchDate;