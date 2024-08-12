import cn from "classnames";
import {ReactElement} from "react";
import {DateUtils} from "shared/lib/DateUtils";
import {Time} from "shared/ui/time";
import {Tournament} from "../types";
import {BlockPrize} from "./block_prize/BlockPrize";
import BlockWins from "./block_wins/BlockWins";
import {BonusFlag} from "./bonus_flag/BonusFlag";
import s from "./TournamentsCard.scss";


type Props = {
    tournament: Tournament
    index: number
    action: ReactElement
}

export function TournamentsCard({tournament, index, action}: Props) {
    let rewardBonus: number | undefined = tournament.rewards[0].currency?.ID_BONUS_CURRENCY;

    return (
        <div className={cn(s._, {['tutorial-card']: index === 0})}>

            {tournament.durationTime && <Time>{DateUtils.createDurationUnix(tournament.durationTime).format('HH:mm:ss')}</Time>}

            {rewardBonus && <BonusFlag className={s.bonus}/>}

            <BlockPrize currency={tournament.rewards[0].currency}/>

            <BlockWins
                entryFee={tournament.entryFee}
                numberOfParticipants={tournament.numberOfParticipants}
                action={action}
            />

        </div>
    );
}
