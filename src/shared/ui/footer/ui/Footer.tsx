import {select, useAppSelector} from "app/store";
import {DateUtils} from "shared/lib/DateUtils";
import {Logo} from "shared/ui/logo";
import BlockInfo from "./block_info/BlockInfo";
import s from "./Footer.module.scss";


export function Footer() {
    const links = useAppSelector(select.config._links);

    return (
        <footer className={s._ + ' wrapper'}>
            <div className={s.block_copyright}>
                <Logo className={s.logo}/>
                <p className={s.copyright}>
                    ©{DateUtils.getYearNow()} Levitating Pot. All rights reserved.</p>
            </div>

            <BlockInfo
                privacyPolicy={links.privacyPolicy}
                rateUs={links.rateUs}
                termsOfService={links.termsOfService}
                rateUsIOS={links.rateUsIOS}
                contactUs={links.contactUs}
            />
        </footer>
    );
}
