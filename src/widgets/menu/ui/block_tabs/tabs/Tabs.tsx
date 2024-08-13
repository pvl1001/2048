import {ChangeEvent, PropsWithChildren} from "react";
import s from "./Tabs.scss";
import {TUserTab} from "../../../types";
import Tab from "../tab/Tab";


type TabsProps = {
    tabs: TUserTab[]
    currentTab: TUserTab
    setCurrentTab: (tab: TUserTab) => void
}

export function Tabs({children, tabs, currentTab, setCurrentTab}: PropsWithChildren<TabsProps>) {

    function onInput(e: ChangeEvent<HTMLInputElement>) {
        setCurrentTab(e.target.value as TUserTab);
    }

    return (
        <>
            <div className={s._}>
                {tabs.map((tab: TUserTab) =>
                    <Tab
                        key={tab}
                        value={tab}
                        currentTab={currentTab}
                        onInput={onInput}
                    >{tab}</Tab>
                )}
            </div>
            <div>
                {children}
            </div>
        </>
    );
}
