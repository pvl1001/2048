import {ReactNode, RefObject} from "react";
import {UserTab} from "shared/common/UserTab";


export type TUserTab = typeof UserTab[keyof typeof UserTab]

export type TabData = {
    ref: RefObject<HTMLDivElement | HTMLUListElement>, element: ReactNode
}