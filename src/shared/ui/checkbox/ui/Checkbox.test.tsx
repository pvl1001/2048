import {render, screen} from "@testing-library/react";
import {Checkbox} from "./Checkbox";


describe('test Checkbox', () => {
    it('should render', () => {
        render(<Checkbox/>);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
});