import {useEffect, useState} from "react";
import {DateUtils} from "../DateUtils";


export type UseTimer = {
    timer: string
    resetTimer: (sec: number) => void
}

export function useTimer(initialSecond: number, intervalSecond: number = 1): UseTimer {
    const [second, setSecond] = useState(initialSecond);
    const timer: string = DateUtils.createDurationSecond(second).format('mm:ss');

    function resetTimer(sec: number): void {
        setSecond(sec);
    }

    useEffect(() => {
        if (second) {
            setTimeout(() => setSecond(prev => --prev), intervalSecond * 1000);
        }
    }, [second]);

    return {timer, resetTimer};
}
