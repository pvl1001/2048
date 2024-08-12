import Tippy, {TippyProps} from "@tippyjs/react";
import cn from "classnames";
import CoinIcon from "shared/assets/icons/coin.png";
import DollarIcon from "shared/assets/icons/dollar.png";
import {Mask} from "shared/lib/Mask";
import {scrollToById} from "shared/lib/scrollToById";
import s from "../ProgressBar.module.scss";
import {ProgressBarItemsCurrencyData, Variant} from "../types";


let settings: TippyProps = {
    theme: 'light',
    interactive: true,
    delay: 200,
    className: s.tippy,
};

type CurrencyProps = {
    value: number
    variant: Variant
}

export function Currency({value, variant}: CurrencyProps) {
    const data: ProgressBarItemsCurrencyData = {
        soft: {
            value: Mask.softCurrency(value),
            tippyValue: Mask.countWithSpace(String(value)),
            iconProps: {
                src: CoinIcon,
                alt: 'coin',
                className: s.coin
            }
        },
        hard: {
            value: Mask.hardCurrency(value) + '$',
            tippyValue: (value / 100).toFixed(2).toString(),
            iconProps: {
                src: DollarIcon,
                alt: 'dollar',
                className: s.dollar
            },
        }
    };

    let content: JSX.Element =
        <div className={s.tippy_container}>
            <img {...data[variant].iconProps} className={s.tippy_img}/>
            {data[variant].tippyValue}{variant === 'hard' && '$'}
        </div>;

    function scrollToPromotions() {
        scrollToById('promotions');
    }

    return (
        <div className={cn(s.bar, s.hard)}>
            <img {...data[variant].iconProps}/>
            <Tippy content={content} {...settings}>
                <span className={s.currency_value}>{data[variant].value}</span>
            </Tippy>
            {variant === 'hard' && <div onClick={scrollToPromotions} className={s.plus}><span>+</span></div>}
        </div>
    );
}
