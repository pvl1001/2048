import {useRef, useState} from "react";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {UserTab} from "shared/common/UserTab";
import s from './BlockTabs.scss';
import {Tabs} from "./tabs/Tabs";
import {TabData, TUserTab} from "../../types";
import MenuHistory from "../../user_menu/menu_history";
import MenuResults from "../../user_menu/menu_results";
import MenuWithdraw from "../../user_menu/menu_withdraw";


export function BlockTabs() {
    const [currentTab, setCurrentTab] = useState<TUserTab>(UserTab.RESULTS);
    const resultsRef = useRef<HTMLDivElement>(null);
    const historyRef = useRef<HTMLDivElement>(null);
    const withdrawRef = useRef<HTMLDivElement>(null);
    const tabs: TabData[] = [
        {ref: resultsRef, element: <MenuResults ref={resultsRef}/>},
        {ref: historyRef, element: <MenuHistory ref={historyRef}/>},
        {ref: withdrawRef, element: <MenuWithdraw ref={withdrawRef}/>}
    ];

    const tabData: Record<UserTab, TabData> = {
        [UserTab.RESULTS]: tabs[0],
        [UserTab.HISTORY]: tabs[1],
        [UserTab.WITHDRAW]: tabs[2],
    };

    const data: TabData = tabData[currentTab];

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
