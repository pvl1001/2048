import {TSelectOption} from "../ui/select";


function isSelect(value: unknown): value is TSelectOption {
    return !!value && typeof value === 'object' && 'value' in value;
}

/** Преобразовать форму с селектами в форму с примитивами */
export function getFormWithSelect<T extends Object>(form: T): Record<keyof T, string> {
    return Object.keys(form).reduce((acc, key) => {
        let value = form[key as keyof typeof form];
        return {
            ...acc,
            [key]: isSelect(value) ? value.value : value
        };
    }, {} as Record<keyof T, string>);
}