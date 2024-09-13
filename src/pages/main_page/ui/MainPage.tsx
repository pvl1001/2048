import {useState} from "react";
import {useOutlet} from "react-router-dom";
import {useTransitionOutlet} from "shared/lib/hooks";
import {Footer} from "shared/ui/footer";
import {UpButton} from "shared/ui/up_button";
import {Header} from "widgets/header";
import {Promotions} from "widgets/promotions";
import {Tournaments} from "widgets/tournaments";
import s from "./MainPage.module.scss";

// const Footer = lazy(() => import('shared/ui/footer').then(({Footer}) => ({default: Footer})));

export function MainPage() {
    const currentOutlet = useOutlet();
    const {transitionOutlet} = useTransitionOutlet(currentOutlet);
    const [isShowUpButton, setIsShowUpButton] = useState(false);

    return (
        <div className={s.mainScreen}>
            <h1>{import.meta.env.TEST}</h1>
            <Header setIsShowUpButton={setIsShowUpButton}/>
            <main className={'wrapper'}>
                <Tournaments/>
            </main>
            <Promotions/>
            <div className="flex-grow"/>
            <Footer/>

            {/*<Suspense fallback={<h1>Loading...</h1>}>*/}
            {/*    <Footer/>*/}
            {/*</Suspense>*/}
            <UpButton isShow={isShowUpButton}/>

            {transitionOutlet}
        </div>
    );
}
