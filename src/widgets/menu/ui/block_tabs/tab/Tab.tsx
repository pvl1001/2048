import React, {ComponentProps, PropsWithChildren} from "react";
import {TUserTab} from "../../../types";
import s from "./Tab.module.scss";


type Props = ComponentProps<'input'> & {
    currentTab: TUserTab
}

function Tab({children, currentTab, ...inputProps}: PropsWithChildren<Props>) {
    return (
        <label className={s._}>
            <input
                type="radio"
                name="user_tab"
                defaultChecked={inputProps.value === currentTab}
                {...inputProps}
            />
            <div>{children}</div>
        </label>
    );
}

export default Tab;