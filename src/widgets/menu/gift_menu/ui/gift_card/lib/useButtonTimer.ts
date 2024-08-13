import {useEffect} from "react";
import {useAppDispatch} from "app/store";
import {DateUtils} from "shared/lib/DateUtils";
import {thunkGetProfile} from "shared/model/profile";


function useButtonTimer(): string {
    const dispatch = useAppDispatch();
    const time: string = DateUtils.buttonTimer().format('H:mm:ss');

    useEffect(() => {
        if (time === '0:00:00') {
            dispatch(thunkGetProfile());
        }
    }, [time]);

    return time;
}

export default useButtonTimer;