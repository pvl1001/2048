import {memo, ReactElement} from "react";
import {Mask} from "shared/lib/Mask";
import {Currency} from "shared/ui/currency";
import {Tournament} from "../../types";
import s from "../TournamentsCard.module.scss";


type Props = {
    entryFee: Tournament['entryFee']
    numberOfParticipants: Tournament['numberOfParticipants']
    action: ReactElement
}

function BlockWins({entryFee, numberOfParticipants, action}: Props) {
    const {ID_HARD_CURRENCY, ID_SOFT_CURRENCY, ID_BONUS_CURRENCY} = entryFee;
    const hardCurrency: number = Mask.hardCurrency((ID_HARD_CURRENCY ?? 0) + (ID_BONUS_CURRENCY ?? 0));
    const softCurrency: string | number = Mask.softCurrency(ID_SOFT_CURRENCY);

    return (
        <div className={s.block_wins}>
            <div className={s.block_wins__grow}>
                <h5 className={s.block_wins__title}>Prosperous wins</h5>

                <div className={s.block_wins__people}>
                    {numberOfParticipants}
                </div>

            </div>

            <div className={s.entry_fee}>
                <p className={s.entry_fee__title}>Entry fee:</p>
                <div className={s.entry_fee__currency}>

                    {!!hardCurrency &&
                        <Currency currency={'money'}>
                            {hardCurrency}
                        </Currency>
                    }

                    {!!softCurrency &&
                        <Currency currency={'coin'}>
                            {softCurrency}
                        </Currency>
                    }
                </div>

                {action}
            </div>
        </div>
    );
}

export default memo(BlockWins);