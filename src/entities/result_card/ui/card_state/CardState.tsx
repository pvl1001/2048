import {ReactNode} from "react";
import {MatchState} from "shared/common/MatchState";
import s from "./CardState.scss";


type CardStateProps = {
    state?: MatchState
    disbanded?: boolean
}

export function CardState({state, disbanded}: CardStateProps) {

    function showState(): ReactNode {
        if (disbanded) {
            return <div className={s.disbanded}>Tournament disbanded</div>;
        }
        if (state === MatchState.ONGOING) {
            return <div className={s.in_progress}>In progress</div>;
        }
        if (state === MatchState.FINISHED) {
            return <div className={s.next_time}>Better luck next time</div>;
        }
        return null;
    }

    return (
        <div className={s._}>
            {showState()}
        </div>
    );
}
