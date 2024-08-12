export class Cookie {
    static set(name: string, value: string, props?: any) {
        props = {
            path: '/',
            ...props
        } || {};

        let exp = props.expires;
        if (typeof exp == 'number' && exp) {
            const d = new Date();
            d.setTime(d.getTime() + exp * 1000);
            exp = props.expires = d;
        }
        if (exp && exp.toUTCString) {
            props.expires = exp.toUTCString();
        }
        value = encodeURIComponent(value);
        let updatedCookie = name + '=' + value;
        for (const propName in props) {
            updatedCookie += '; ' + propName;
            const propValue = props[propName];
            if (propValue !== true) {
                updatedCookie += '=' + propValue;
            }
        }
        document.cookie = updatedCookie;
    }

    static get(name: string) {
        const matches = document.cookie.match(
            //eslint-disable-next-line
            new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
        );
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    static delete(name: string): void {
        Cookie.set(name, '', {expires: -1});
    }
}
