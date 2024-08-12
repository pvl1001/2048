import {useEffect, useState} from "react";


export function useDebounce(value: string, delayMs: number): string {
    // Состояние и сеттер для отложенного значения
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            let handler = setTimeout(() => setDebouncedValue(value), delayMs);
            return () => {
                clearTimeout(handler);
            };
        },
        [value]
    );

    return debouncedValue;
}
