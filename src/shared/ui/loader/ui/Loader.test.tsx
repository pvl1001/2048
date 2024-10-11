import {render} from "@testing-library/react";
import {Loader} from "./Loader";
import s from './Loader.module.scss';


describe('test Loader', () => {
    it.each(['button', 'modal'] as const)('should theme %s', (theme) => {
        const {container} = render(<Loader theme={theme}/>);
        expect(container.querySelector('.' + s[theme])).toBeInTheDocument();
    });
});
