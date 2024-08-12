import {AxiosError} from "axios";
import {ResponseError} from "shared/api/server_service";


function isObject(value: unknown): value is object {
    return value !== null && typeof value === 'object';
}

function isError(value: unknown): value is Error {
    return isObject(value) && 'message' in value;
}

export function isAxiosError(value: unknown): value is AxiosError<ResponseError> {
    return isObject(value) && 'response' in value;
}

export default function getErrorMessage(error: unknown, errorType?: 'reason' | 'error'): string {
    if (typeof error === 'string') return error;
    if (isAxiosError(error) && error.response) {
        if (errorType) return error.response.data[errorType as keyof typeof error.response.data];
        if ('reason' in error.response.data) return error.response.data.reason as string;
        if ('strCode' in error.response.data) return error.response.data.strCode as string;
        return error.response.data.error;
    }
    if (isError(error)) {
        return error.message;
    }
    console.error(error);
    return 'Unknown error';
}