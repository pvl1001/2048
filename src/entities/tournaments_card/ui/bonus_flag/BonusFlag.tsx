import cn from "classnames";
import Icon from 'shared/assets/icons/bonus.svg';
import s from "./BonusFlag.module.scss";


type BonusFlagProps = {
    className?: string
}

export function BonusFlag({className = ''}: BonusFlagProps) {
    return (
        <div className={cn(s._, className)}>
            <img src={Icon} alt="bonus"/>
        </div>
    );
}
