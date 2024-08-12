import getErrorMessage from "shared/lib/GetErrorMessage";


export class LocalErrors {

    private static getLocalError(error: unknown, errors: Record<string, string>): string {
        let serverMessage: string;
        if (typeof error === 'string') {
            serverMessage = error;
        } else {
            serverMessage = getErrorMessage(error) as keyof typeof errors;
        }
        return errors[serverMessage] || serverMessage;
    }

    static phone(error: unknown): string {
        return this.getLocalError(error, {
            NOT_AVAILABLE: 'Invalid phone number',
            LOGIN_NOT_FOUND: 'Invalid phone number',
            ALREADY_REGISTERED: 'This phone number is already registered'
        });
    }

    static firstName(error: unknown): string {
        return this.getLocalError(error, {
            BAD_SYMBOLS: 'You can only use Latin letters, apostrophes, periods, commas, and hyphens',
        });
    }

    static lastName(error: unknown): string {
        return this.getLocalError(error, {
            BAD_SYMBOLS: 'You can only use Latin letters, apostrophes, periods, commas, and hyphens',
        });
    }

    static email(error: unknown): string {
        return this.getLocalError(error, {
            ALREADY_REGISTERED: 'Already in use',
        });
    }
}

