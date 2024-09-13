import cn from "classnames";
import s from "./SaleBanner.module.scss";


type Props = {
    discount: number
    className?: string
}

export function SaleBanner({className, discount}: Props) {
    return (
        <div className={cn(s._, className)}>
            <div className={s.text}>
                <p className={s.text__sale}>{discount}%</p>
                <p className={s.text__description}>more value</p>
            </div>
        </div>
    );
}
