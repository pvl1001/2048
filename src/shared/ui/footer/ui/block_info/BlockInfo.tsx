import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {Icons} from "../../lib/icons";
import s from "./BlockInfo.scss";


function BlockInfo() {
    let links = useAppSelector(select.config._links);

    return (
        <div className={s._}>
            <div>
                <h5 className={s.title}>Information</h5>
                <ul className={s.list}>
                    <li className={s.list_item}><a target="_blank" href={links.privacyPolicy}>Privacy</a></li>
                    <li className={s.list_item}><a target="_blank" href={links.termsOfService}>Terms</a></li>
                    <li className={s.list_item}><a target="_blank" href={links.contactUs}>Contact Us</a></li>
                </ul>
            </div>

            <div>
                <h5 className={s.title}>Download mobile: </h5>
                <ul className={s.list_icons}>
                    <li className={cn(s.list_item, s.list_item_icon, s.list_item_apple)}>
                        <a target="_blank" href={links.rateUsIOS}>
                            <Icons.apple/>
                        </a>
                    </li>
                    <li className={cn(s.list_item, s.list_item_icon, s.list_item_)}>
                        <a target="_blank" href={links.rateUs}>
                            <Icons.android/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlockInfo;