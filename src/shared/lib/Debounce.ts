let timeout: ReturnType<typeof setTimeout>;

export function debounce(cb: () => any, ms: number) {
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(cb, ms);
}