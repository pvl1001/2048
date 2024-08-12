import {useAppDispatch} from "app/store";
import {useEffect} from "react";
import {DateUtils} from "shared/lib/DateUtils";
import {thunkGetProfile} from "shared/model/profile";


function useButtonTimer(): string {
    let dispatch = useAppDispatch();
    let time: string = DateUtils.buttonTimer().format('H:mm:ss');

    useEffect(() => {
        if (time === '0:00:00') {
            dispatch(thunkGetProfile());
        }
    }, [time]);

    return time;
}

export default useButtonTimer;