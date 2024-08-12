import {useRef, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {UserTab} from "shared/common/UserTab";
import {TabData, TUserTab} from "../../types";
import MenuHistory from "../../user_menu/menu_history";
import MenuResults from "../../user_menu/menu_results";
import MenuWithdraw from "../../user_menu/menu_withdraw";
import s from './BlockTabs.scss';
import {Tabs} from "./tabs/Tabs";


export function BlockTabs() {
    const [currentTab, setCurrentTab] = useState<TUserTab>(UserTab.RESULTS);
    let resultsRef = useRef<HTMLDivElement>(null);
    let historyRef = useRef<HTMLDivElement>(null);
    let withdrawRef = useRef<HTMLDivElement>(null);
    let tabs: TabData[] = [
        {ref: resultsRef, element: <MenuResults ref={resultsRef}/>},
        {ref: historyRef, element: <MenuHistory ref={historyRef}/>},
        {ref: withdrawRef, element: <MenuWithdraw ref={withdrawRef}/>}
    ];

    let tabData: Record<UserTab, TabData> = {
        [UserTab.RESULTS]: tabs[0],
        [UserTab.HISTORY]: tabs[1],
        [UserTab.WITHDRAW]: tabs[2],
    };

    let data: TabData = tabData[currentTab];

    return (
        <div className={s._}>
            <Tabs
                tabs={[UserTab.RESULTS, UserTab.HISTORY, UserTab.WITHDRAW]}
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={currentTab}
                    nodeRef={data.ref}
                    classNames={'transition-tab'}
                    addEndListener={(done: () => void) => data.ref.current?.addEventListener("transitionend", done, false)}
                >{data.element}
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}
