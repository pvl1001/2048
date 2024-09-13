import {select, useAppSelector} from "app/store";
import rewardImg from 'shared/assets/images/promotions/extended.png';
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import {CurrencyWrapper} from "shared/ui/modal";
import s from './RegisterNow.module.scss';


export function RegisterNow() {
    const {soft, formatBonus} = useAppSelector(select.config._storeItemConfig).regReward;
    const {navigateModal} = useNavigateModal();

    return (
        <>
            <p className={s.text}>
                Register now and get your reward!
                <br/>
                All benefits will also be revealed</p>
            <img className={s.reward_image} src={rewardImg} alt="reward"/>

            <CurrencyWrapper
                className={s.currency}
                soft={soft}
                formatUniteHard={formatBonus}
            />

            <Button
                theme={'orange'}
                className={s.button}
                onClick={() => navigateModal(RoutePaths.REGISTRATION)}
            >Registration</Button>
        </>
    );
}
