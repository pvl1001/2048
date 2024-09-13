import {select, useAppSelector} from "app/store";
import {RoutePaths} from "shared/common/RoutePaths";
import {useNavigateModal} from "shared/lib/hooks";
import {TutorialUtils} from "shared/lib/TutorialUtils";
import {Button} from "shared/ui/button";
import {ModalCurrencies} from "shared/ui/modal";
import CubeWelcome from '../img/cube_welcome.webp';
import s from "./ModalWelcome.module.scss";


export function ModalWelcome() {
    const {navigateModal, closeModal} = useNavigateModal();
    const {soft, formatBonus, exp} = useAppSelector(select.config._storeItemConfig).tutReward;

    function refuseHandler() {
        closeModal();
        TutorialUtils.clearTutorialStorage();
    }

    function yesHandler() {
        navigateModal(RoutePaths.TUTORIAL_GIFT);
    }

    return (
        <div className={s._}>
            <img src={CubeWelcome} className={s.image} alt="welcome cube"/>
            <p className={s.text}>Would you like to be trained and receive <br/> an award?</p>

            <ModalCurrencies
                exp={exp}
                soft={soft}
                formatUniteHard={formatBonus}
            />

            <div className={s.buttons}>
                <Button theme={'blue'} onClick={refuseHandler}>Refuse</Button>
                <Button theme={'orange'} onClick={yesHandler}>Yes</Button>
            </div>
        </div>
    );
}
