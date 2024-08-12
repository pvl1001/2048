import {DateUtils} from "shared/lib/DateUtils";
import {Logo} from "shared/ui/logo";
import BlockInfo from "./block_info/BlockInfo";
import s from "./Footer.scss";


export function Footer() {
    return (
        <footer className={s._ + ' wrapper'}>
            <div className={s.block_copyright}>
                <Logo className={s.logo}/>
                <p className={s.copyright}>
                    ©{DateUtils.getYearNow()} Levitating Pot. All rights reserved.</p>
            </div>

            <BlockInfo/>
        </footer>
    );
}
