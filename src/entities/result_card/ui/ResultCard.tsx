import {select, useAppSelector} from "app/store";
import {MatchState} from "shared/common/MatchState";
import {CardPlace} from "./card_place/CardPlace";
import {CardState} from "./card_state/CardState";
import {CardWins} from "./card_wins/CardWins";
import {CardYouWon} from "./card_you_won/CardYouWon";
import s from "./ResultCard.module.scss";
import {MatchInfo, PlayerResult} from "../types";


type ResultCardProps = {
    result: MatchInfo
    onClick?: () => void
}

export function ResultCard({result, onClick}: ResultCardProps) {
    const profileId: string = useAppSelector(select.profile._id);
    const currentResult: PlayerResult | undefined = result.playersResults.find((p: PlayerResult) => String(p.playerId) === profileId);
    if (!currentResult) return null;

    const {place, rewards, startDateTs}: PlayerResult = currentResult;
    const disbanded: boolean = result.state === MatchState.CANCELLED;
    const isRewards: boolean = JSON.stringify(rewards) !== '{}';

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
