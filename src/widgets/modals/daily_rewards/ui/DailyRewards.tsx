import {select, useAppSelector} from "app/store";
import {Claim} from "features/claim";
import {ConfigDailyReward} from "shared/api/adapters";
import {ProfileDailyRewards} from "shared/model/profile";
import {ModalWrapper} from "shared/ui/modal";
import {useReopenDailyRewards} from "../lib/useReopenDailyRewards";
import {DailyCard} from "./daily_card/DailyCard";
import s from "./DailyRewards.scss";


export function DailyRewards() {
    let {checkReopen} = useReopenDailyRewards();
    let dailyRewards: ConfigDailyReward[] = useAppSelector(select.config._dailyRewards);
    let {loginDay, currentReward}: ProfileDailyRewards = useAppSelector(select.profile._dailyRewards);

    return (
        <ModalWrapper className={s._}>
            <h2 className={s.title}>DAILY REWARDS</h2>
            <p className={s.description}>Comeback tomorrow for more rewards!</p>

            <ul className={s.list}>
                {dailyRewards.map((day: ConfigDailyReward) =>
                    <DailyCard
                        key={day.id}
                        day={day.id}
                        rewardDay={currentReward}
                        currentDay={loginDay}
                    />
                )}
            </ul>

            <Claim
                className={s.button}
                currency={{formatUniteHard: 25, soft: 10}}
                clickHandler={checkReopen}
            />

        </ModalWrapper>
    );
}
