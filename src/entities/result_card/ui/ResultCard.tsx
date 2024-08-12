import {select, useAppSelector} from "app/store";
import {MatchState} from "shared/common/MatchState";
import {MatchInfo, PlayerResult} from "../types";
import {CardPlace} from "./card_place/CardPlace";
import {CardState} from "./card_state/CardState";
import {CardWins} from "./card_wins/CardWins";
import {CardYouWon} from "./card_you_won/CardYouWon";
import s from "./ResultCard.scss";


type ResultCardProps = {
    result: MatchInfo
    onClick?: () => void
}

export function ResultCard({result, onClick}: ResultCardProps) {
    let profileId: string = useAppSelector(select.profile._id);
    let currentResult: PlayerResult | undefined = result.playersResults.find((p: PlayerResult) => String(p.playerId) === profileId);
    if (!currentResult) return null;

    let {place, rewards, startDateTs}: PlayerResult = currentResult;
    let disbanded: boolean = result.state === MatchState.CANCELLED;
    let isRewards: boolean = JSON.stringify(rewards) !== '{}';

    return (
        <li className={s._}>
            <CardPlace
                place={place}
                isRewards={isRewards}
                disbanded={disbanded}
            />
            <CardWins
                state={result.state}
                date={startDateTs}
                playersCount={result.maxPlayersCount}
                disbanded={disbanded}
                onClick={onClick}
            />
            {rewards && isRewards && !disbanded && result.state === MatchState.FINISHED
                ? <CardYouWon rewards={rewards}/>
                : <CardState
                    state={result.state}
                    disbanded={disbanded}
                />
            }
        </li>
    );
}
