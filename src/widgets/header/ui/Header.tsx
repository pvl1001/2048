import {WithAuth} from "shared/lib/hocs";
import {Logo} from "shared/ui/logo";
import s from "./Header.scss";
import Nav from "./nav/Nav";
import {Offers} from "./offers/Offers";
import useViewHeader from "../lib/useViewHeader";


type HeaderProps = {
    setIsShowUpButton: (inView: boolean) => void
}

export function Header({setIsShowUpButton}: HeaderProps) {
    const ref = useViewHeader(setIsShowUpButton);

    return (
        <header ref={ref} className={s._}>
            <Nav/>
            <Logo className={s.logo}/>

            <WithAuth>
                <Offers className={s.offers}/>
            </WithAuth>
        </header>
    );
}
