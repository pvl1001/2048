export class StringUtils {
    static addLeadingZero(input: string, length: number): string {
        while (input.length < length) {
            input = "0" + input;
        }
        return input;
    }

    static cropTo(str: string, length: number = 11, suffix: string = "..."): string {
        if (str.length > length) {
            str = str.substr(0, length) + suffix;
        }
        return str;
    }

    static removeSpaces(str: string): string {
        return str.replace(/\s+/g, ' ');
    }
}
