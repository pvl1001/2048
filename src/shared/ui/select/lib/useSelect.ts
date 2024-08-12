import {useEffect, useRef, useState} from "react";
import {TUseSelect} from "../types";


type UseSelectProps = {
    clickOut?: () => void
    searchValue: string
    withSearch: boolean | undefined
}

function useSelect({clickOut, withSearch, searchValue}: UseSelectProps): TUseSelect {
    let inputRef = useRef<HTMLInputElement>(null);
    let dropdownRef = useRef<HTMLDivElement>(null);
    let arrowRef = useRef<HTMLDivElement>(null);
    let [isVisible, setIsVisible] = useState(false);

    function clickOutHandler(e: MouseEvent) {
        let isArrow: boolean = !!arrowRef.current?.contains(e.target as HTMLElement);
        let isMenu: boolean = !!inputRef.current?.contains(e.target as HTMLElement);
        let isDropdown: boolean = !!dropdownRef.current?.contains(e.target as HTMLElement);
        if (!isMenu && !isDropdown && !isArrow) {
            closeSelect();
        }
    }

    function openSelect(): void {
        setIsVisible(prev => withSearch && searchValue ? true : !prev);
    }

    function closeSelect(): void {
        setIsVisible(false);
    }

    useEffect(() => {
        if (isVisible) {
            document.addEventListener('click', clickOutHandler);
            return () => document.removeEventListener('click', clickOutHandler);
        } else {
            clickOut?.();
        }
    }, [isVisible]);

    return {arrowRef, inputRef, dropdownRef, isVisible, setIsVisible, openSelect, closeSelect};
}

export default useSelect;