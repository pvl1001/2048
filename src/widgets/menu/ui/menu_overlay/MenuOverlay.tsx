import cn from "classnames";
import s from "./MenuOverlay.module.scss";


function MenuOverlay() {
    return <div className={cn(s._, 'overlay')}/>;
}

export default MenuOverlay;