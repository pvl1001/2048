import {render, screen} from "@testing-library/react";
import {Currency, CurrencyProps} from "./Currency";


describe('test Currency', () => {
    const currencies: CurrencyProps['currency'][] = ['money', 'star', 'coin'];

    it.each(currencies)('should render %s', (currency) => {
        render(<Currency currency={currency}>1</Currency>);
        expect(screen.getByRole('paragraph')).toHaveClass(RegExp(currency));
    });
});