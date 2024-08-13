import {memo} from "react";
import {ProfileCurrency} from "shared/model/profile/api/adapter";
import s from "./ProgressBar.module.scss";
import ProgressBarItem from "./ProgressBarItem";


type Props = {
    currency: ProfileCurrency
}

function ProgressBar({currency}: Props) {
    const {uniteHard, soft} = currency;

    return (
        <div className={s._}>
            <ProgressBarItem.Level/>
            <ProgressBarItem.Currency variant={'hard'} value={uniteHard}/>
            <ProgressBarItem.Currency variant={'soft'} value={soft}/>
        </div>
    );
}

export default memo(ProgressBar);