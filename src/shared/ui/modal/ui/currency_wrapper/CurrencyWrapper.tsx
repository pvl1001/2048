import cn from "classnames";
import {Currency} from "shared/ui/currency";
import s from "./CurrencyWrapper.module.scss";


type Props = {
    soft?: number
    formatUniteHard?: number
    exp?: number
    className?: string
}

export function CurrencyWrapper({exp, soft, formatUniteHard, className}: Props) {
    return (
        <ul className={cn(s._, className)}>
            {!!exp &&
                <li className={s.item}>
                    {exp}%
                </li>
            }
            {!!soft &&
                <li className={s.item}>
                    <Currency currency={'coin'}>{soft}</Currency>
                </li>
            }
            {!!formatUniteHard &&
                <li className={s.item}>
                    <Currency currency={'money'}>{formatUniteHard}</Currency>
                </li>
            }
        </ul>
    );
}
