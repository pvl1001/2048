import {RoutePaths} from "shared/common/RoutePaths";
import {Mask} from "shared/lib/Mask";
import {OfferId} from "shared/model/global_config";
import {ProfileAdapter, ProfileCurrency} from "shared/model/profile";
import {offersData} from "../lib/data";
import {Offer, OfferResponse, OffersResponse, TOffers} from "../types";


export class Adapter {

    static routes = {
        [OfferId.PERSONAL_REGISTRATION_OFFER]: RoutePaths.HAPPY_OFFER,
        [OfferId.PERSONAL_TUTORIAL_COMPLETE_OFFER]: RoutePaths.LUCKY_OFFER,
        [OfferId.PERSONAL_COUNT_LEVEL_OFFER]: RoutePaths.SPECIAL_OFFER,
        [OfferId.PERSONAL_COUNT_TOURNAMENTS_OFFER]: RoutePaths.FOR_YOU_OFFER,
    };

    static getOffers(response: OffersResponse): TOffers {

        const groupResOffers = response.offers
            .reduce((acc, offer: OfferResponse) => {
                if (offer.deadlineSecondsLeft) { // с таймером
                    acc.withTimer.push(offer);
                    acc.withTimer.sort((a: OfferResponse, b: OfferResponse) => a.deadlineSecondsLeft - b.deadlineSecondsLeft);
                } else {
                    acc.withoutTimer.push(offer);
                    acc.withoutTimer.sort((a: OfferResponse, b: OfferResponse) => a.state.showCount - b.state.showCount);
                }
                return acc;
            }, {withoutTimer: [], withTimer: []} as {
                withoutTimer: OfferResponse[],
                withTimer: OfferResponse[],
            });

        const sortOffers: OfferResponse[] = [...groupResOffers.withoutTimer, ...groupResOffers.withTimer];

        return sortOffers.reduce((acc: TOffers, offer: OfferResponse) => {
            const key = this.routes[offer.id as keyof typeof this.routes];
            return {
                ...acc,
                [key]: {
                    ...offer,
                    ...offersData[key as keyof typeof offersData],
                    price: {hard: Mask.hardCurrency(offer.price.CENTS)},
                    rewards: offer.rewards.map(reward => {
                        const currency: ProfileCurrency = ProfileAdapter.getCurrency(reward.currency);
                        return {
                            ...reward,
                            currency: {
                                hard: currency.formatHard,
                                bonus: currency.formatBonus,
                                soft: currency.soft,
                            }
                        };
                    }),
                } as Offer
            };
        }, {} as TOffers);
    }
}
