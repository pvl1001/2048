import {Attributes, Children, cloneElement, ReactNode} from "react";


export function useChildrenWithProps<P>(children: ReactNode, props: Partial<P> & Attributes) {
    return Children.map(children, (child) =>
        cloneElement(child as JSX.Element, props)
    );
}
