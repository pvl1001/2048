import {useRoutes} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import {useTransitionOutlet} from "shared/lib/hooks";
import {Modal} from "shared/ui/modal";
import {ModalCube} from "shared/ui/modal_cube";
import {ModalWelcome} from "widgets/modals";
import {TutorialGift} from "./gift/TutorialGift";
import {TutorialTournament} from "./tournament/TutorialTournament";
import s from './Tutorial.module.scss';


export function TutorialRoutes() {
    const routes = useRoutes([
        {
            path: RoutePaths.TUTORIAL,
            element: <Modal title={'Welcome!'} disabledEventOverlay className={s.modal_welcome}><ModalWelcome/></Modal>,

        },
        {
            path: RoutePaths.TUTORIAL_GIFT,
            element: <ModalCube disabledEventOverlay><TutorialGift/></ModalCube>,
        },
        {
            path: RoutePaths.TUTORIAL_TOURNAMENT,
            element: <TutorialTournament/>,
        },
    ]);

    const {transitionOutlet} = useTransitionOutlet(routes);

    return transitionOutlet;
}
