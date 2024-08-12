import {ReactNode} from "react";
import {Place} from "shared/api/server_service";
import s from "./PlayerCardPlace.scss";


type PlayerCardPlaceProps = {
    isOngoing: boolean
    place?: Place
}

function PlayerCardPlace({place, isOngoing}: PlayerCardPlaceProps) {

    function variant(): ReactNode {
        if (isOngoing) {
            return <div className={s.clock}/>;
        }
        if (place) {
            return <>{place}</>;
        }

        return null;
    }

    return (
        <div className={s._ + ' player_card_place'}>
            {variant()}
        </div>
    );
}

export default PlayerCardPlace;