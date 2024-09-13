import {DateUtils} from "shared/lib/DateUtils";
import {TSelectOption} from "shared/ui/select";
import {Country} from "../types";
import {countries} from "./consts";


const days: TSelectOption[] = Array(31)
    .fill('')
    .map((_, i: number) => ({title: String(++i), value: String(i)}));

const mounths: TSelectOption[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
].map((el: string, i: number) => ({title: el, value: i + 1}));

const yearNow: number = DateUtils.getYearNow();
const years: TSelectOption[] = Array(100).fill('').map((_, i) => {
    const val: string = String(yearNow - i);
    return {
        title: val,
        value: val
    };
});

const countryOptions: TSelectOption[] = countries.map((c: Country) => {
    const iconPath = c.flagId.toLowerCase();
    let icon
    import(`./flags/${[iconPath]}.png`).then(module => icon = module.default)

    return {
        icon,
        title: c.name,
        value: c.flagId,
        code: c.phonePrefix
    };
});

type TFieldSelectOption = {
    days: TSelectOption[],
    mounths: TSelectOption[],
    years: TSelectOption[],
    countries: TSelectOption[],
}

export default {
    days,
    mounths,
    years,
    countries: countryOptions,
} as TFieldSelectOption;