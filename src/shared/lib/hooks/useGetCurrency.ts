import {useAppDispatch} from "app/store";
import {Cause} from "entities/history_card";
import {NotificationVariants} from "entities/notification";
import {ClaimPayload, ClaimResponse, Money} from "shared/api/server_service";
import {BuyStore} from "shared/common/BuyStore";
import {RoutePaths} from "shared/common/RoutePaths";
import getErrorMessage from "shared/lib/GetErrorMessage";
import {ProfileChange, ProfileChanges, ProfileServerResponse, thunkBuyItem, thunkGetClaim, thunkGetLevelClaim} from "shared/model/profile";
import {ProfileAdapter} from "../../model/profile";
import {useNavigateModal} from "./useNavigateModal";


type WithNavigateModalCurrencyProps = {
    buyStoreItem: BuyStore | string
    navigateTo?: RoutePaths | string
}

export type UseGetCurrency = {
    buyItem: (buyStoreItem: BuyStore | string, navigateTo?: RoutePaths | string) => Promise<void>
    getLevelClaim: () => Promise<void>
    getClaim: (payload?: ClaimPayload, matchResult?: NotificationVariants) => Promise<void>
}

function isClaimResponse(value: ProfileServerResponse | ClaimResponse): value is ClaimResponse {
    return 'profileMutation' in value;
}

function getProfileChanges(res: ProfileServerResponse | ClaimResponse): ProfileChanges[] {
    return isClaimResponse(res)
        ? res.profileMutation.profileChanges
        : res.profileChanges;
}

function getRefundChanges(profileChanges: ProfileChange[]): ProfileChange | undefined {
    return profileChanges.find(change => 'causeId' in change && change.causeId === Cause.TOURNAMENT_REFUND);
}

function getOtherChanges(profileChanges: ProfileChange[]): ProfileChange[] {
    return profileChanges.filter(change => change.currencyChanges && change.causeId !== Cause.TOURNAMENT_REFUND);
}

// Отфильтровать значения с наградами
function filterCurrencyChange(profileChanges: ProfileChanges[]): ProfileChange[] {
    return profileChanges.filter(ch => 'currencyChanges' in ch) as ProfileChange[];
}

// Суммировать валюту с наград
function getSumCurrencyChanges(profileChanges: ProfileChange[]): Partial<Money> {
    let initialValue = {
        ID_EXP: 0,
        ID_BONUS_CURRENCY: 0,
        ID_HARD_CURRENCY: 0,
        ID_SOFT_CURRENCY: 0,
    };
    return profileChanges.reduce((acc, {currencyChanges}: Partial<ProfileChange>) => {
        let checkMinusCurrency = (value?: number): number => (!value || value < 0) ? 0 : value;
        return {
            ID_EXP: acc.ID_EXP + checkMinusCurrency(currencyChanges?.ID_EXP),
            ID_BONUS_CURRENCY: acc.ID_BONUS_CURRENCY + checkMinusCurrency(currencyChanges?.ID_BONUS_CURRENCY),
            ID_HARD_CURRENCY: acc.ID_HARD_CURRENCY + checkMinusCurrency(currencyChanges?.ID_HARD_CURRENCY),
            ID_SOFT_CURRENCY: acc.ID_SOFT_CURRENCY + checkMinusCurrency(currencyChanges?.ID_SOFT_CURRENCY),
        };
    }, initialValue);
}

/** Получить награду и показать модальное окно*/
export function useGetCurrency(isReturnError?: boolean): UseGetCurrency {
    let dispatch = useAppDispatch();
    let {navigateEventModal} = useNavigateModal();

    function showRefundModal(profileChanges: ProfileChange[]) {
        let changesRefund: ProfileChanges | undefined = getRefundChanges(profileChanges);

        if (changesRefund) { // возврат средств за распущенный матч
            navigateEventModal(RoutePaths.REFUND, {
                currency: ProfileAdapter.getCurrency(changesRefund.currencyChanges)
            });
        }
    }

    function showSuccessModal(profileChanges: ProfileChange[], props?: WithNavigateModalCurrencyProps) {
        let otherChanges: ProfileChange[] = getOtherChanges(profileChanges);

        if (otherChanges.length) {
            let to: RoutePaths = props?.buyStoreItem === BuyStore.ID_TUT_REWARD
                ? RoutePaths.TUTORIAL_REWARD // награда за туториал
                : RoutePaths.SUCCESS; // остальные награды

            let sumCurrencyChanges: Partial<Money> = getSumCurrencyChanges(otherChanges);

            navigateEventModal(to, {
                message: 'Your prize:',
                currency: ProfileAdapter.getCurrency(sumCurrencyChanges),
            }, true);
        }
    }

    // Показать окно со статусом зачисления валюты
    async function withNavigateModalCurrency(
        callback: () => Promise<ProfileServerResponse | ClaimResponse>,
        props?: WithNavigateModalCurrencyProps
    ) {
        try {
            let res: ProfileServerResponse | ClaimResponse = await callback();
            let profileChanges: ProfileChange[] = filterCurrencyChange(getProfileChanges(res));
            showRefundModal(profileChanges);
            showSuccessModal(profileChanges, props);
        } catch (err) {
            let message: string = getErrorMessage(err);
            if (isReturnError) {
                throw Error(getErrorMessage(err));
            }
            navigateEventModal(RoutePaths.ERROR, {message}, true);
        }
    }

    async function buyItem(buyStoreItem: BuyStore | string, navigateTo?: RoutePaths | string) {
        await withNavigateModalCurrency(dispatch(thunkBuyItem(buyStoreItem)).unwrap, {buyStoreItem, navigateTo});
    }

    async function getLevelClaim() {
        await withNavigateModalCurrency(dispatch(thunkGetLevelClaim()).unwrap);
    }

    async function getClaim(payload?: ClaimPayload) {
        await withNavigateModalCurrency(dispatch(thunkGetClaim(payload)).unwrap);
    }

    return {
        buyItem,
        getLevelClaim,
        getClaim,
    };

}

