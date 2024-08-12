import {Ref, useEffect} from "react";
import {useInView} from "react-intersection-observer";


function useViewHeader(setIsShowUpButton: (inView: boolean) => void): Ref<HTMLDivElement> {
    const {ref, inView} = useInView();

    useEffect(() => {
        setIsShowUpButton(!inView);
    }, [inView]);

    return ref;
}

export default useViewHeader;