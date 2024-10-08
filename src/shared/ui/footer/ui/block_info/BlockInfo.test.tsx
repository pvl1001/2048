import {render, screen} from "@testing-library/react";
import BlockInfo from "./BlockInfo";


describe('test BlockInfo', () => {
    it('render links', () => {
        const props = {
            contactUs: 'contactUs',
            rateUs: 'rateUs',
            termsOfService: 'termsOfService',
            privacyPolicy: 'privacyPolicy',
            rateUsIOS: 'rateUsIOS',
        };

        render(<BlockInfo {...props}/>);

        screen.getAllByRole('link').forEach((link) => {
            const href: string = link.getAttribute('href') ?? '';
            expect(true).toEqual(href in props);
        });
    });
});