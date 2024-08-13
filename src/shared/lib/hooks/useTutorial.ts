import {useAppDispatch} from "app/store";
import {BuyStore} from "shared/common/BuyStore";
import {StorageItem} from "shared/common/StorageItem";
import {useGetCurrency, UseNavigateModal, useNavigateModal} from "shared/lib/hooks/index";
import {TutorialUtils} from "shared/lib/TutorialUtils";
import {ApiProfile} from "shared/model/profile";


export type UseTutorial = {
    isTutorial: boolean
}

export function useTutorial() {
    const dispatch = useAppDispatch();
    const {buyItem} = useGetCurrency();
    const isTutorial: boolean = !!localStorage[StorageItem.TUTORIAL];
    const {navigateModalError}: UseNavigateModal = useNavigateModal();

    function dispatchTutorialFinish() {
        if (localStorage[StorageItem.TUTORIAL_FINISH]) {
            TutorialUtils.clearTutorialFinishStorage();
        }
    }

    async function buyTutorialFee() {
        try {
            return await ApiProfile.buyItem(BuyStore.ID_TUT_FEE);
        } catch (err) {
            navigateModalError(err);
        }
    }

    async function claimTutorialReward() {
        await buyItem(BuyStore.ID_TUT_REWARD);
    }

    return {
        isTutorial,
    };
}
