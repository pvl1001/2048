import cn from "classnames";
import {useState} from "react";
import CoinsImg from 'shared/assets/icons/coins.png';
import DollarsImg from 'shared/assets/icons/dollars.png';
import StarXpImg from 'shared/assets/icons/star_xp.png';
import DollarsAndCoinsImg from 'shared/assets/images/promotions/rookie.png';
import {ProfileCurrency} from "shared/model/profile";
import {CurrencyWrapper} from "shared/ui/modal";
import s from "./CurrencyWithImg.scss";


type ImgProps = Partial<Record<keyof ProfileCurrency | 'hard_and_soft', {
    src: string
    className: string
}>>

type Props = {
    className?: string
    currency:
        | {formatUniteHard: number, soft?: number, exp?: never}
        | {formatUniteHard?: number, soft: number, exp?: never}
        | {formatUniteHard?: never, soft?: never, exp: number}
}

/** Отображение одной валюты */
export function CurrencyWithImg({currency, className}: Props) {
    let exp = 'exp' in currency ? currency.exp : 0;
    let soft = 'soft' in currency ? currency.soft : 0;
    let formatUniteHard = 'formatUniteHard' in currency ? currency.formatUniteHard : 0;

    let [imgProps] = useState<ImgProps>(() => ({
        exp: {
            src: StarXpImg,
            className: s.exp_img,
        },
        hard: {
            src: DollarsImg,
            className: s.dollars_img,
        },
        soft: {
            src: CoinsImg,
            className: s.coins_img,
        },
        hard_and_soft: {
            src: DollarsAndCoinsImg,
            className: s.dollars_and_coins_img,
        },
    }));

    function getImgKey() {
        if (soft && formatUniteHard) {
            return 'hard_and_soft';
        }
        if (exp) {
            return 'exp';
        }
        if (soft) {
            return 'soft';
        }
        if (formatUniteHard) {
            return 'hard';
        }
    }

    let imgKey = getImgKey() as keyof typeof imgProps;

    return (
        <div className={cn(s._, className)}>
            <div className={s.img_container}>
                <img {...imgProps[imgKey]} alt={`${imgKey} currency`}/>
            </div>

            <CurrencyWrapper
                exp={exp}
                soft={soft}
                formatUniteHard={formatUniteHard}
            />
        </div>
    );
}
