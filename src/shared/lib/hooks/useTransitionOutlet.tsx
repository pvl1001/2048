import {useLocation, useRoutes} from "react-router-dom";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useNavigateModal} from "shared/lib/hooks";


export function useTransitionOutlet(routes: ReturnType<typeof useRoutes>) {
    let location = useLocation();
    let {removeEventModal} = useNavigateModal();

    return {
        transitionOutlet:
            <SwitchTransition>
                <CSSTransition
                    key={location.key}
                    classNames="transition-modal"
                    timeout={200}
                    onExit={removeEventModal}
                >
                    {() => routes}
                </CSSTransition>
            </SwitchTransition>
    };
}

