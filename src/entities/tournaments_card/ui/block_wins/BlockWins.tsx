import {memo, ReactElement} from "react";
import {Currency} from "shared/ui/currency";
import {Tournament} from "../../types";
import s from "../TournamentsCard.module.scss";


type Props = {
    hardCurrency: number
    softCurrency: string | number
    numberOfParticipants: Tournament['numberOfParticipants']
    action: ReactElement
}

function BlockWins({hardCurrency, softCurrency, numberOfParticipants, action}: Props) {
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