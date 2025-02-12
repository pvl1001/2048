import {render, screen} from "@testing-library/react";
import {TextArea} from "shared/ui/textarea";
import s from './TextArea.module.scss';


describe('test TextArea', () => {
    it('check render label', () => {
        const label = 'test label';
        render(<TextArea label={label}/>);
        expect(screen.getByText(label)).toBeInTheDocument();
    });

    it('check render error', () => {
        const {container} = render(<TextArea label={'test'} error={'test error'}/>);
        expect(container.querySelector('.' + s.error)).toBeInTheDocument();
    });

    it.each([
        {value: '', maxLength: 100, expected: 100},
        {value: 'test', maxLength: 10, expected: 6},
        {value: 'test', maxLength: 4, expected: 0},
    ])('value = $value maxLength = $maxLength counter should be $expected', ({value, maxLength, expected}) => {
        render(
            <TextArea
                label={'label'}
                onChange={console.log}
                value={value}
                maxLength={maxLength}
            />
        );
        expect(screen.getByText(expected)).toBeInTheDocument();
    });
});
