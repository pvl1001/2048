import {useEffect, useMemo, useState} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import dayjs from "dayjs";
import {thunkGetTournaments} from "../model/TournamentsThunks";
import {Tournament} from "../types";


export function useTournaments(): Tournament[] {
    const dispatch = useAppDispatch();
    const tournaments: Tournament[] = useAppSelector(select.tournaments._data);
    const [timer, setTimer] = useState(false);

    function getTournamentsWithDurationTime(): Tournament[] {
        return tournaments.reduce((acc: Tournament[], t: Tournament) => {
            const diffFromTimeStamp: number = dayjs().unix() - t.fromTimeStamp;
            if (!t.untilTimeStamp && diffFromTimeStamp >= 0) {
                acc.push(t);
                return acc;
            }
            const durationTime: number = dayjs.unix(t.untilTimeStamp ?? 0).diff(dayjs());
            if (durationTime < 0) {
                return acc;
            }
            acc.push({...t, durationTime});
            return acc;
        }, []);
    }

    const tournamentsWithDurationTime: Tournament[] = useMemo(() => {
        if (tournaments) {
            setTimeout(() => setTimer(prev => !prev), 1000);
            return getTournamentsWithDurationTime();
        }
        return [];
    }, [tournaments, timer]);

    useEffect(() => {
        if (!tournaments.length) {
            dispatch(thunkGetTournaments());
        }
    }, []);

    return tournamentsWithDurationTime;
}
