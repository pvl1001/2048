import getErrorMessage from "shared/lib/GetErrorMessage";


export class LocalErrors {
    private static getLocalError(error: unknown, errors: Record<string, string>): string {
        let serverMessage: string;
        if (typeof error === 'string') {
            serverMessage = error;
        } else {
            serverMessage = getErrorMessage(error, 'error').replace(/:.+/g, '') as keyof typeof errors;
        }
        return errors[serverMessage] || serverMessage;
    }

    static nickname(error: unknown, {min, max}: {min: number, max: number}) {
        return this.getLocalError(error, {
            ERR_BAD_NAME_FORMAT: 'You can only use numbers, Latin letters, numbers, and underscores',
            ERR_BAD_NAME_LENGTH_BELOW_MIN: `Nickname must contain at least ${min} characters`,
            ERR_BAD_NAME_LENGTH_ABOVE_MAX: `Nickname can't contain more than ${max} characters`,
        });
    };
}