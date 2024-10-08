import {render, screen} from "@testing-library/react";
import {CloseButton} from "./CloseButton";


describe('test CloseButton', () => {
    it('should render', () => {
        render(<CloseButton/>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
});