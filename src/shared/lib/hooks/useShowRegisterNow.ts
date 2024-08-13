import {useEffect} from "react";
import {useLocation} from "react-router-dom";
import {select, useAppSelector} from "app/store";
import {RoutePaths} from "shared/common/RoutePaths";
import {StorageItem} from "shared/common/StorageItem";
import {useNavigateModal} from "./useNavigateModal";
import {useTimer, UseTimer} from "./useTimer";

// Показать окна с предложением регистрации
export function useShowRegisterNow() {
    const {navigateModal} = useNavigateModal();
    const location = useLocation();
    const {timer}: UseTimer = useTimer(1);
    const isAuth: boolean = useAppSelector(select.profile._isAuth);

    useEffect(() => {
        if (isAuth) {
            delete localStorage[StorageItem.TOURNAMENT_COUNTER];
            return;
        }
        if (!isAuth && timer === '00:00' && location.pathname === '/') {
            const counter: number = localStorage[StorageItem.TOURNAMENT_COUNTER];
            const isRegNowInit: boolean = !!localStorage[StorageItem.IS_REG_NOW_INIT];
            const isShowWithCounter: boolean = counter % 4 === 0; // показать 1 раз в {n} матчей
            const showRegisterNow = () => navigateModal(RoutePaths.REGISTER_NOW);

            if (!isRegNowInit) {
                localStorage[StorageItem.IS_REG_NOW_INIT] = true;
                return showRegisterNow();
            }
            if (isShowWithCounter) {
                showRegisterNow();
                delete localStorage[StorageItem.TOURNAMENT_COUNTER];
            }
        }
    }, [timer, isAuth]);
}
