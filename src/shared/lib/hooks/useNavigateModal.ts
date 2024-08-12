import {useAppDispatch} from "app/store";
import {useLocation, useNavigate} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import {modalEventsActions} from "shared/ui/modal";
import getErrorMessage from "../GetErrorMessage";


export type UseNavigateModal = {
    navigateEventModal: (path: RoutePaths | string, state?: any | null, isForward?: boolean) => void
    removeEventModal: () => void
    navigateModal: (path: RoutePaths | string, state?: any) => void
    closeModal: () => void
    navigateModalError: (error: unknown) => void
}

export function useNavigateModal(): UseNavigateModal {
    let dispatch = useAppDispatch();
    let location = useLocation();
    let navigate = useNavigate();

    function navigateEventModal(path: RoutePaths | string, state?: any, isForward?: boolean) {
        dispatch(modalEventsActions.addEvent({
            event: {[path]: state || null},
            isForward: isForward || false
        }));
    }

    function navigateModal(path: RoutePaths | string, state?: any) {
        navigate(path, {state, replace: true});
    }

    function removeEventModal() {
        if (location.state?.pathname) {
            dispatch(modalEventsActions.removeEvent(location.state.pathname as RoutePaths));
        }
    }

    function navigateModalError(error: unknown) {
        navigateModal(RoutePaths.ERROR, {message: getErrorMessage(error)});
        throw error;
    }

    function closeModal() {
        navigateModal('/');
    }

    return {
        navigateEventModal,
        removeEventModal,
        navigateModal,
        closeModal,
        navigateModalError,
    };
}
