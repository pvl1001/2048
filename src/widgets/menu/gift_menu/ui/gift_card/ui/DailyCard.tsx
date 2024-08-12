import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {Claim} from "features/claim";
import ButtonTimer from "./button_timer/ButtonTimer";
import s from "./GiftCard.scss";


export function DailyCard() {
    let giftCount: number = useAppSelector(select.profile._dailyGiftTkn);

    return (
        <li className={cn(s._, s._daily)}>
            <div className={s.img}>
                <div className={s.img__img}/>
                <p className={s.img__text}>DAILY <br/> GIFT</p>
            </div>

            {!!giftCount
                ? <Claim className={s.button} currency={{formatUniteHard: 100, soft: 25}}/>
                : <ButtonTimer className={s.button}/>
            }
        </li>
    );
}
