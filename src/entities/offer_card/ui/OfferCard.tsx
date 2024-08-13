import {useEffect} from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "app/store";
import cn from "classnames";
import {RoutePaths} from "shared/common/RoutePaths";
import s from "./OfferCard.scss";
import {useOfferTimeLeft, UseOfferTimeLeft} from "../lib/useOfferTimeLeft";
import {offersActions} from "../model/offersSlice";
import {Offer} from "../types";


type Props = {
    theme: 'gift' | 'mascot'
    link: RoutePaths.HAPPY_OFFER | RoutePaths.LUCKY_OFFER
    deadlineTs: Offer['deadlineTs']
}

export function OfferCard({theme, link, deadlineTs}: Props) {
    const dispatch = useAppDispatch();
    const offerTimeLeft: UseOfferTimeLeft = useOfferTimeLeft(deadlineTs);

    useEffect(() => {
        if (offerTimeLeft?.isTimeEnd) {
            dispatch(offersActions.removeOffer(link));
        }
    }, [offerTimeLeft?.isTimeEnd]);

    return (
        <Link to={link} className={cn(s._, s[`_${theme}`])}>
            <div className={s.image}/>
            <p className={s.time}>
                <span className={s.time_icon}/>
                {offerTimeLeft?.time}
            </p>
        </Link>
    );
}
