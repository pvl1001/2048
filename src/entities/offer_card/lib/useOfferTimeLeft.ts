import dayjs from "dayjs";
import {DateUtils} from "shared/lib/DateUtils";
import {useTimer} from "shared/lib/hooks";


export type UseOfferTimeLeft = null | {
    time: string
    isTimeEnd: boolean
}

export function useOfferTimeLeft(deadlineTs: number): UseOfferTimeLeft {
    useTimer(deadlineTs, 1);
    if (!deadlineTs) {
        return null;
    }
    const durationTime = DateUtils.getDiff({startDate: DateUtils.getDateFromUnix(deadlineTs), endDate: dayjs()});
    const isTimeEnd: boolean = durationTime.seconds() < 0;
    const time: string = durationTime.format('HH:mm:ss');

    return {time, isTimeEnd};
}
