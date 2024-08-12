import {useState} from "react";
import {useOutlet} from "react-router-dom";
import {useTransitionOutlet} from "shared/lib/hooks";
import {Footer} from "shared/ui/footer";
import {UpButton} from "shared/ui/up_button";
import {Header} from "widgets/header";
import {Promotions} from "widgets/promotions";
import {Tournaments} from "widgets/tournaments";
import s from "./MainPage.module.scss";


export function MainPage() {
    let currentOutlet = useOutlet();
    let {transitionOutlet} = useTransitionOutlet(currentOutlet);
    let [isShowUpButton, setIsShowUpButton] = useState(false);

    return (
        <div className={s.mainScreen}>
            <Header setIsShowUpButton={setIsShowUpButton}/>
            <main className={'wrapper'}>
                <Tournaments/>
            </main>
            <Promotions/>
            <div className="flex-grow"/>
            <Footer/>
            <UpButton isShow={isShowUpButton}/>

            {transitionOutlet}
        </div>
    );
}
