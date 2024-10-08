import {render, screen} from "@testing-library/react";
import {ButtonWithTooltip} from "./ButtonWithTooltip";


describe('test ButtonWithTooltip', () => {
    it('render button', () => {
        render(<ButtonWithTooltip error={undefined}/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should render button with error', () => {
        render(<ButtonWithTooltip error={'error'}/>);
        expect(screen.getByText('!')).toBeInTheDocument();
    });
});