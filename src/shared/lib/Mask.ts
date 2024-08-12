export class Mask {
    private static matchRegex(value: string, regex: RegExp): string {
        return value.match(regex)?.[0] ?? '';
    }

    private static getRegexCurrency(value: string): string {
        let regex = RegExp(/-?\d+\.\d/);
        return regex.exec(value)?.[0] ?? value;
    }

    static phone(value: string): string {
        return value.replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1 $2')
            .replace(/(\d{3})(\d)/, '$1 $2')
            .replace(/-(\d{4})(\d)/, ' $1$2');
    }

    static number(value: string): string {
        return value.replace(/\D/g, '');
    }

    static currencyWithDots(value: string | number): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    static numberWithDot(value: string): string {
        return value.replace(/^0{2,}/g, '0').match(/\d+\.?\d?\$?/g)?.[0] ?? '';
    }

    static hardCurrency(value: number | undefined): number {
        if (!value) return 0;
        return +this.getRegexCurrency(String(value / 100));
    }

    static softCurrency(value: number | undefined): string | number {
        if (!value) return 0;
        let isLessLength: boolean = String(value).length < 4;
        if (isLessLength) return value;
        let currency = String(value / 1000);
        return this.getRegexCurrency(currency) + (isLessLength ? '' : 'K');
    }

    static countWithSpace(value: string | number): string {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
    }

    static fieldName(value: string): string {
        return this.matchRegex(value, /^[a-zA-Z.,'-]+/g);
    }
}
