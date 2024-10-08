import {render, screen} from "@testing-library/react";
import {Button} from "shared/ui/button";
import {describe} from "vitest";


describe('test Button', () => {

    it('should render children', () => {
        render(<Button>Test</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Test');
    });

    it('should render pending', () => {
        render(<Button isPending/>);

        const loader = screen.getByRole('list');
        expect(loader).toBeInTheDocument();
    });

    it('should render currency', () => {
        const value = '123';
        render(<Button currency={value}/>);

        expect(screen.getByText(`+${value}`)).toBeInTheDocument();
    });

});
