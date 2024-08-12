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
    let dispatch = useAppDispatch();
    let {buyItem} = useGetCurrency();
    let isTutorial: boolean = !!localStorage[StorageItem.TUTORIAL];
    let {navigateModalError}: UseNavigateModal = useNavigateModal();

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
