export class LocalStorage {
    static setKeyValue(key: string, value: any): void {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    static getValue(key: string): any {
        return JSON.parse(window.localStorage.getItem(key) as string);
    }

    static hasValue(key: string): boolean {
        return window.localStorage.getItem(key) != null;
    }

    static removeValue(key: string): void {
        window.localStorage.removeItem(key);
    }
}
