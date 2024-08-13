import {useEffect, useState} from "react";
import {select, useAppSelector} from "app/store";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal, UseNavigateModal} from "shared/lib/hooks";
import {ProfileDailyRewards} from "shared/model/profile";


export function useReopenDailyRewards() {
    const {navigateEventModal}: UseNavigateModal = useNavigateModal();
    const {currentReward, rewardDays}: ProfileDailyRewards = useAppSelector(select.profile._dailyRewards);
    const hasRewardDays: boolean = Object.values(rewardDays ?? {}).filter(Boolean).length > 1;
    const rewardCount: number = rewardDays?.[currentReward] ?? 0;
    const [isReopen, setIsReopen] = useState(false);

    function checkReopen() {
        const count: 0 | 1 = hasRewardDays ? 0 : 1;
        setIsReopen(rewardCount > count);
    }

    useEffect(() => () => {
        isReopen && navigateEventModal(RoutePaths.DAILY_REWARDS);
    }, [isReopen]);

    return {
        checkReopen
    };
}
