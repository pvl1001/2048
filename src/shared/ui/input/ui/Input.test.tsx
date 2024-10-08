import {render, screen} from "@testing-library/react";
import TestIcon from 'shared/assets/icons/arrow.svg?react';
import {Input} from "shared/ui/input";


describe('test Input', () => {
    it('check set value', async () => {
        render(<Input defaultValue={213}/>);
        expect(screen.getByRole('textbox')).toHaveAttribute('value', '213');
    });

    it('check render error', async () => {
        render(<Input error={'test error'}/>);
        expect(screen.getByText('!')).toBeInTheDocument();
    });

    it('check render label', async () => {
        const labelText: string = 'test label';
        render(<Input label={labelText}/>);
        expect(screen.getByText(labelText)).toBeInTheDocument();
    });

    it('check render code', async () => {
        const codeText: string = '123';
        render(<Input code={codeText}/>);
        expect(screen.getByText(codeText)).toBeInTheDocument();
    });

    it('check render icon', async () => {
        const {container,} = render(<Input icon={<TestIcon/>}/>);
        expect(container.querySelector('svg')).toBeInTheDocument();
    });
});
