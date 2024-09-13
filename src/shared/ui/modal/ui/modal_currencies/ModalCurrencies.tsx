import cn from "classnames";
import {ProfileCurrency} from "shared/model/profile";
import {CurrencyWithImg} from "shared/ui/modal";
import s from "./ModalСurrencies.module.scss";


type CompleteCashProps = {
    className?: string
    exp?: ProfileCurrency['exp']
    soft?: ProfileCurrency['soft']
    formatUniteHard?: ProfileCurrency['formatUniteHard']
}

/** Отображение нескольких валют */
export function ModalCurrencies({className, exp, formatUniteHard, soft}: CompleteCashProps) {
    return (
        <div className={cn(s._, className)}>
            {!!exp &&
                <CurrencyWithImg currency={{exp}}/>
            }
            {!!formatUniteHard &&
                <CurrencyWithImg currency={{formatUniteHard}}/>
            }
            {!!soft &&
                <CurrencyWithImg currency={{soft}}/>
            }
        </div>
    );
}
