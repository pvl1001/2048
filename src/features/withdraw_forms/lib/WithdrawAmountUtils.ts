import {Mask} from "shared/lib/Mask";


export const regex = /(\.?\.?\$\$?)|(\.$)|(\${2})|(\.0)/g;

export function withDollar(value: string): string {
    if (!value || value === '0$' || value === '$') return '0$';
    return Mask.numberWithDot(value).replace(regex, '') + '$';
}

export function validate(value: string): string | void {
    const replaceVal: number = +value.replace('$', '');
    if (replaceVal < 5) return 'Minimal withdrawal amount is 5$';
}

