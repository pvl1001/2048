import cn from "classnames";
import {Offer, OfferCard, TOffers} from "entities/offer_card";
import {RoutePaths} from "shared/common/RoutePaths";
import {useOffers, UseOffers} from "../../lib/useOffers";
import s from "./Offers.module.scss";


type Props = {
    className?: string
}

export function Offers({className}: Props) {
    const {offers}: UseOffers = useOffers();

    if (!offers) {
        return null;
    }

    const cardProps = {
        [RoutePaths.HAPPY_OFFER]: 'gift',
        [RoutePaths.LUCKY_OFFER]: 'mascot',
    } as const;

    return (
        <ul className={cn(className, s._)}>
            {Object.keys(cardProps).map((key) => {
                const offer: Offer = offers?.[key as keyof TOffers];
                return offer && <li key={key}>
                    <OfferCard
                        theme={cardProps[key as keyof typeof cardProps]}
                        link={key as keyof typeof cardProps}
                        deadlineTs={offer.deadlineTs}
                    />
                </li>;
            })}
        </ul>
    );
}
