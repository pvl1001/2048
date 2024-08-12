import {select, useAppSelector} from "app/store";
import {useEffect, useState} from "react";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal, UseNavigateModal} from "shared/lib/hooks";
import {ProfileDailyRewards} from "shared/model/profile";


export function useReopenDailyRewards() {
    let {navigateEventModal}: UseNavigateModal = useNavigateModal();
    let {currentReward, rewardDays}: ProfileDailyRewards = useAppSelector(select.profile._dailyRewards);
    let hasRewardDays: boolean = Object.values(rewardDays ?? {}).filter(Boolean).length > 1;
    let rewardCount: number = rewardDays?.[currentReward] ?? 0;
    let [isReopen, setIsReopen] = useState(false);

    function checkReopen() {
        let count: 0 | 1 = hasRewardDays ? 0 : 1;
        setIsReopen(rewardCount > count);
    }

    useEffect(() => () => {
        isReopen && navigateEventModal(RoutePaths.DAILY_REWARDS);
    }, [isReopen]);

    return {
        checkReopen
    };
}
