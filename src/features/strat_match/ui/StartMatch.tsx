import arrowImg from "shared/assets/icons/arrow.svg";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {TutorialUtils} from "shared/lib/TutorialUtils";
import s from "./StartMatch.module.scss";


export function StartMatch() {
    const {navigateEventModal} = useNavigateModal();

    const startMatchHandler = () => {
        if (TutorialUtils.isTutorial()) {
            navigateEventModal(RoutePaths.SUCCESS, {
                currency: {
                    exp: 25,
                    soft: 200
                }
            });
            return TutorialUtils.finishTutorial();
        }
        alert('play game');
    };

    return (
        <button type="button" className={s._} onClick={startMatchHandler}>
            <img src={arrowImg} alt="arrow"/>
        </button>
    );
}
