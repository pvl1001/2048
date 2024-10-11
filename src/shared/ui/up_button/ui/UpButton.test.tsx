import {render, screen} from "@testing-library/react";
import {UpButton} from "./UpButton";


describe('test UpButton', () => {
    it('check isShow', async () => {
        const {unmount} = render(<UpButton isShow/>);
        expect(screen.getByRole('button')).toBeInTheDocument();

        unmount();

        render(<UpButton isShow={false}/>);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
