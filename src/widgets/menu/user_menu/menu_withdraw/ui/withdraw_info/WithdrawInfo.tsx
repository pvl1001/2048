import {select, useAppSelector} from "app/store";
import InfoIcon from 'shared/assets/icons/info.png';
import s from "./WithdrawInfo.scss";


function WithdrawInfo() {
    const links = useAppSelector(select.config._links);

    return (
        <div className={s._}>

            <div className={s.icon_block}>
                <img src={InfoIcon} alt="info"/>
            </div>

            <div className={s.info_container}>
                <ul className={s.list}>
                    <li>
                        Withdrawal requests are processed within <br/>
                        2-14 business days
                    </li>
                    <li>
                        Only one withdrawal can processed at a time
                    </li>
                    <li>
                        Minimal withdrawal amount is 5$
                    </li>
                </ul>
                <p className={s.policy}>Check our <a target="_blank" href={links.privacyPolicy} rel="noreferrer">Withdrawal Policy</a> here</p>
            </div>

        </div>
    );
}

export default WithdrawInfo;