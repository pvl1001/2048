import {RegisterServerErrors} from "../types";


export function isServerErrors(arr: unknown): arr is RegisterServerErrors[] {
    return Array.isArray(arr) && 'field' in arr[0];
}