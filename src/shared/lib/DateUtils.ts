import dayjs, {Dayjs} from "dayjs";
import duration, {Duration} from "dayjs/plugin/duration";
import objectSupport from "dayjs/plugin/objectSupport";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";


dayjs.extend(duration);
dayjs.extend(utc);
dayjs.extend(objectSupport);
dayjs.extend(relativeTime);

export class DateUtils {
    /** Получить разницу между датами */
    static getDiff({startDate, endDate}: {
        startDate?: Dayjs | number
        endDate: Dayjs | number
    }): Duration {
        return dayjs.duration(dayjs(startDate).diff(endDate));
    }

    /** Создать продолжительность времени в формате mm:ss */
    static createDurationSecond(second: number): Duration {
        return dayjs.duration(second, 's');
    }

    static createDurationUnix(unixTime: number): Duration {
        return dayjs.duration(unixTime);
    }

    static getDateFromUnix(unixTime: number): Dayjs {
        return dayjs.unix(unixTime);
    }

    static getYearNow(): number {
        return +dayjs().format('YYYY');
    }

    static buttonTimer(): Dayjs {
        const t1: Dayjs = dayjs({hour: 6, second: 5});
        const t2: Dayjs = dayjs({hour: 18, second: 5});
        const nowUtc: Dayjs = dayjs.utc();
        const diffTime: number = dayjs(t2.diff(nowUtc)).hour() < 12 ? t2.diff(nowUtc) : t1.diff(nowUtc);
        return dayjs(diffTime);
    }

    static now(): Dayjs {
        return dayjs();
    }

    static getDay(date: string) {
        return dayjs(date).format('DD');
    }

    static getMonth(date: string) {
        return dayjs(date).format('MM');
    }

    static getYear(date: string) {
        return dayjs(date).format('YYYY');
    }

    static codeTimer(unixTime: number) {
        const timer: Dayjs = this.getDateFromUnix(unixTime);
        const now: Dayjs = this.now();
        return now.diff(timer, 's');
    }
}