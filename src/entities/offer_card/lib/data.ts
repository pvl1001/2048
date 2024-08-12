import {RoutePaths} from "shared/common/RoutePaths";
import {BigModalTitles} from "shared/ui/big_modal";
import {OffersData} from "../types";


export const offersData: OffersData = {
    [RoutePaths.SPECIAL_OFFER]: {
        title: BigModalTitles.SPECIAL_OFFER,
        description: 'The perfect deal for you!',
        containerClass: 'special',
    },
    [RoutePaths.FOR_YOU_OFFER]: {
        title: BigModalTitles.JUST_FOR_YOU_OFFER,
        description: 'Enjoy your tailor-made offer!',
        containerClass: 'just_for_you',
    },
    [RoutePaths.HAPPY_OFFER]: {
        title: BigModalTitles.HAPPY_OFFER,
        description: 'Purchase Now For BIG WINS To Come Down Your Chimney!',
        containerClass: 'happy',
    },
    [RoutePaths.LUCKY_OFFER]: {
        title: BigModalTitles.LUCKY_OFFER,
        description: 'PURCHASE NOW FOR HO HO HOT WINS!',
        containerClass: 'lucky',
    },
} as const;
