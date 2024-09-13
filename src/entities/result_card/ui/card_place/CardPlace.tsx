import {ReactNode} from "react";
import classNames from "classnames";
import {Place} from "shared/api/server_service";
import s from "./CardPlace.module.scss";


type CardPlaceProps = {
    place: Place,
    disbanded?: boolean
    isRewards?: boolean
}

export function CardPlace({place, disbanded, isRewards}: CardPlaceProps) {
    function medalIcon(): ReactNode {
        if (disbanded) {
            return <div className={classNames(s.other_place, s.disbanded)}>?</div>;
        }
        if (!isRewards) {
            return <div className={s.other_place}>{place}</div>;
        }
        switch (place) {
            case 0:
                return <div className={s.other_place}>?</div>;
            case 1:
            case 2:
            case 3:
                return <div className={classNames(s.medal, s['medal_place_' + place])}>{place}</div>;
            default:
                return <div className={s.other_place}>{place}</div>;
        }
    }

    return (
        <div className={classNames(s.container, {[s.container_disbanded]: disbanded})}>
            {medalIcon()}
        </div>
    );
}
