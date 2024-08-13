import {useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {Offer, TOffers, useOfferTimeLeft} from "entities/offer_card";
import {OpenModalDeposit} from "features/open_modal_deposit";
import {CurrencySymbols, useCurrencySymbol} from "shared/lib/hooks";
import {Mask} from "shared/lib/Mask";
import {ProfileCurrency} from "shared/model/profile";
import {BigModal} from "shared/ui/big_modal";
import s from './OfferModal.scss';
import {SaleBanner} from "./sale_banner/SaleBanner";
import {useOfferShowed} from "../lib/useOfferShowed";


export function OfferModal() {
    const location = useLocation();
    const offers: TOffers = useAppSelector(select.offers._data);
    const [offer] = useState<Offer>(offers?.[location.pathname as keyof typeof offers]);
    useOfferShowed(offer);
    const offerTimeLeft = useOfferTimeLeft(offer?.deadlineTs ?? 0);
    const currencySymbol: CurrencySymbols = useCurrencySymbol();

    if (offerTimeLeft?.isTimeEnd) {
        return <Navigate to={'/'} replace/>;
    }

    const wasPrice: number = offer.price.hard + (offer.price.hard / 100 * offer.discount);
    const offersLength: number = offers ? Object.values(offers).length : 0;

    return (
        <BigModal
            title={offer.title}
            description={offer.description}
            action={
                <OpenModalDeposit
                    sku={offer.sku}
                    bonusCurrency={offer.rewards[0].currency.bonus}
                    hardCurrency={offer.rewards[0].currency.hard}
                >Only {Mask.countWithSpace(offer.price.hard) + currencySymbol}</OpenModalDeposit>
            }
            wasPrice={Mask.countWithSpace(wasPrice.toFixed(0)) + currencySymbol}
            time={offerTimeLeft?.time}
            contentClass={cn(s._, s[offer.containerClass])}
        >
            <div className={s.image}/>
            <ul className={s.card_list}>
                {Object.keys(offer.rewards[0].currency).map(key =>
                    <li key={key} className={cn(s.card)}>
                        <div className={cn(s.currency, {
                            [s._hard]: key === 'hard',
                            [s._bonus]: key === 'bonus',
                            [s._soft]: key === 'soft',
                        })}/>
                        <p className={s.currency_value}>
                            {offer && offer.rewards[0].currency[key as keyof ProfileCurrency]}{key !== 'soft' && '$'}
                        </p>
                    </li>
                )}
            </ul>

            {offer.discount && <SaleBanner discount={offer.discount} className={s.sale_banner}/>}

            {offersLength > 1 && <p className={s.available}>1\{offersLength} Available</p>}

        </BigModal>
    );
}
