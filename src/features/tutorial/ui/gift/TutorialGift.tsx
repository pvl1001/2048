import {select, useAppDispatch, useAppSelector} from "app/store";
import {BuyStore} from "shared/common/BuyStore";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {thunkBuyItem} from "shared/model/profile";
import {Button} from "shared/ui/button";
import {CurrencyWithImg} from "shared/ui/modal";
import s from './TutorialGift.module.scss';


export function TutorialGift() {
    const {navigateModal} = useNavigateModal();
    const dispatch = useAppDispatch();
    const {tutFeeCurrency} = useAppSelector(select.config._designCurrency);

    async function goNext() {
        navigateModal(RoutePaths.TUTORIAL_TOURNAMENT);
        dispatch(thunkBuyItem(BuyStore.ID_TUT_GIFT));
    }

    return (
        <>
            <p className={s.text}>To start, here's a little gift for you!</p>
            <CurrencyWithImg currency={{soft: tutFeeCurrency}}/>
            <Button
                theme={'blue'}
                className={s.button}
                onClick={goNext}
            >Next</Button>
        </>
    );
}
