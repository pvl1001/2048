import {useEffect} from "react";
import {useAppDispatch} from "app/store";
import {Errors} from "shared/common/Errors";
import {RoutePaths} from "shared/common/RoutePaths";
import {Cookie} from "shared/lib/Cookie";
import {thunkGetProfile} from "shared/model/profile";
import {useNavigateModal} from "./useNavigateModal";

// Получить данные юзера
export function useGetProfile() {
    const dispatch = useAppDispatch();
    const {navigateModal} = useNavigateModal();
    const token = Cookie.get('token');

    async function getProfile(): Promise<void> {
        const data = await dispatch(thunkGetProfile());
        if (data.payload === Errors.BANNED) {
            navigateModal(RoutePaths.ACC_FROZEN);
        }
    }

    useEffect(() => {
        if (token) { // если авторизовался
            getProfile();
        }
    }, [token]);
}