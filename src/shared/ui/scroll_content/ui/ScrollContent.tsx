import cn from "classnames";
import {forwardRef, PropsWithChildren, Ref, UIEvent, useState} from "react";
import s from "./ScrollContent.module.scss";


type ScrollContentProps = {
    className?: string
    hidden?: boolean
    center?: boolean
}

export let ScrollContent = forwardRef(({children, center, className, hidden}: PropsWithChildren<ScrollContentProps>, ref: Ref<HTMLDivElement>) => {
    const [scrollValue, setScrollValue] = useState({top: 0, bottom: 0});

    function onScroll(e: UIEvent<HTMLElement>) {
        let {scrollTop, scrollHeight, offsetHeight} = e.target as HTMLElement;

        setScrollValue({
            top: scrollTop,
            bottom: scrollHeight - offsetHeight - scrollTop
        });
    }

    return (
        <div
            hidden={hidden}
            className={cn(s._, className, {
                [s.center]: center,
            })}
        >
            <div
                ref={ref}
                className={cn(s.wrapper, 'wrapper')}
                onScroll={onScroll}
            >
                <div
                    hidden={!scrollValue.top}
                    className={cn(s.shadow, s.top, 'shadow shadow-top')}
                />
                {children}
                <div
                    hidden={scrollValue.bottom < 5}
                    className={cn(s.shadow, s.bottom, 'shadow shadow-bottom')}
                />
            </div>
        </div>
    );
});