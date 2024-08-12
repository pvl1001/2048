import arrowImg from "shared/assets/icons/arrow.svg";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {TutorialUtils} from "shared/lib/TutorialUtils";
import s from "./StartMatch.scss";


export function StartMatch() {
    let {navigateEventModal} = useNavigateModal();

    let startMatchHandler = () => {
        TutorialUtils.finishTutorial();
        navigateEventModal(RoutePaths.SUCCESS, {
            currency: {
                exp: 25,
                soft: 200
            }
        });
    };

    return (
        <button type="button" className={s._} onClick={startMatchHandler}>
            <img src={arrowImg} alt="arrow"/>
        </button>
    );
}
