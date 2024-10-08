import {render, screen} from "@testing-library/react";
import {Currency, CurrencyProps} from "./Currency";


describe('test Currency', () => {
    const curr: CurrencyProps['currency'][] = ['money', 'star', 'coin'];

    curr.forEach((el) => {
        it(`should render ${el}`, () => {
            render(<Currency currency={el}>1</Currency>);
            expect(screen.getByRole('paragraph')).toHaveClass(RegExp(el));
        });
    });
});