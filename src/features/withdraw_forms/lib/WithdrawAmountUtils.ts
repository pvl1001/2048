import {Mask} from "shared/lib/Mask";


export let regex = /(\.?\.?\$\$?)|(\.$)|(\${2})|(\.0)/g;

export function withDollar(value: string): string {
    if (!value || value === '0$' || value === '$') return '0$';
    return Mask.numberWithDot(value).replace(regex, '') + '$';
}

export function validate(value: string): string | void {
    let replaceVal: number = +value.replace('$', '');
    if (replaceVal < 5) return 'Minimal withdrawal amount is 5$';
}

