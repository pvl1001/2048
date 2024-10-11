import cn from "classnames";
import {ReactElement} from "react";
import {CurrencyId} from "shared/api/server_service";
import {DateUtils} from "shared/lib/DateUtils";
import {Mask} from "shared/lib/Mask.ts";
import {Time} from "shared/ui/time";
import {Tournament} from "../types";
import {BlockPrize} from "./block_prize/BlockPrize";
import BlockWins from "./block_wins/BlockWins";
import {BonusFlag} from "./bonus_flag/BonusFlag";
import s from "./TournamentsCard.module.scss";


type Props = {
    action: ReactElement
    isTutorial: boolean
    currency: Partial<CurrencyId>
    durationTime: Tournament['durationTime']
    entryFee: Tournament['entryFee']
    numberOfParticipants: Tournament['numberOfParticipants']
}

export function TournamentsCard(props: Props) {
    const {
        isTutorial,
        currency,
        durationTime,
        entryFee,
        numberOfParticipants,
        action,
    } = props;

    return (
        <div className={cn(s._, {['tutorial-card']: isTutorial})}>

            {!!durationTime && <Time>{DateUtils.createDurationUnix(durationTime).format('HH:mm:ss')}</Time>}

            {!!currency.ID_BONUS_CURRENCY && <BonusFlag className={s.bonus}/>}

            <BlockPrize
                hasBonus={!!currency.ID_BONUS_CURRENCY}
                hardCurrency={Mask.hardCurrency(currency.ID_BONUS_CURRENCY || currency.ID_HARD_CURRENCY)}
                softCurrency={Mask.softCurrency(currency.ID_SOFT_CURRENCY)}
            />

            <BlockWins
                hardCurrency={Mask.hardCurrency((entryFee.ID_HARD_CURRENCY ?? 0) + (entryFee.ID_BONUS_CURRENCY ?? 0))}
                softCurrency={Mask.softCurrency(entryFee.ID_SOFT_CURRENCY)}
                numberOfParticipants={numberOfParticipants}
                action={action}
            />

        </div>
    );
}
