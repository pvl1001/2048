import cn from "classnames";
import {Icons} from "../../lib/icons";
import s from "./BlockInfo.module.scss";


type Props = {
    privacyPolicy: string
    termsOfService: string
    contactUs: string
    rateUsIOS: string
    rateUs: string
}

function BlockInfo({privacyPolicy, termsOfService, contactUs, rateUsIOS, rateUs}: Props) {
    return (
        <div className={s._}>
            <div>
                <h5 className={s.title}>Information</h5>
                <ul className={s.list}>
                    <li className={s.list_item}><a target="_blank" href={privacyPolicy} rel="noreferrer">Privacy</a></li>
                    <li className={s.list_item}><a target="_blank" href={termsOfService} rel="noreferrer">Terms</a></li>
                    <li className={s.list_item}><a target="_blank" href={contactUs} rel="noreferrer">Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h5 className={s.title}>Download mobile: </h5>
                <ul className={s.list_icons}>
                    <li className={cn(s.list_item, s.list_item_icon, s.list_item_apple)}>
                        <a target="_blank" href={rateUsIOS} rel="noreferrer">
                            <Icons.apple/>
                        </a>
                    </li>
                    <li className={cn(s.list_item, s.list_item_icon, s.list_item_)}>
                        <a target="_blank" href={rateUs} rel="noreferrer">
                            <Icons.android/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlockInfo;