import {ComponentProps} from "react";
import cn from "classnames";
import s from './Tournaments.module.scss';


export function SliderArrow({className, ...props}: ComponentProps<'button'>) {
    return (
        <button
            type={'button'}
            className={cn(s.slider_arrow, className)}
            {...props}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 46" fill="none">
                <path id="Polygon 2" d="M38 29.9282C43.3333 26.849 43.3333 19.151 38 16.0718L12.5 1.34936C7.16666 -1.72985 0.500002 2.11916 0.500002 8.27756L0.500001 37.7224C0.500001 43.8808 7.16667 47.7298 12.5 44.6506L38 29.9282Z" fill="#B4BEF7"/>
            </svg>
        </button>
    );
}
