import cn from "classnames";
import {useEffect} from "react";
import {Mask} from "shared/lib/Mask";
import s from "./CodeInput.scss";


type Props = {
    className?: string
    setCode: (code: string) => void
    values: string[]
    setValues: (val: string[]) => void
    hasError: boolean
    nextTab: (i: number) => void
}

function CodeInput({className, values, setValues, setCode, hasError, nextTab}: Props) {
    let maxLength: number = 6;

    function onChange(value: string, i: number): void {
        if (value.length > 1) {
            value = value[value.length - 1];
        }

        let number: string = Mask.number(value);

        if (i === maxLength || !number) {
            return;
        }

        let copyValues: string[] = [...values];
        copyValues[i] = number;
        setValues(copyValues);
        setCode(copyValues.join(''));
        if (i + 1 < maxLength) {
            nextTab(i + 1);
        }
    }

    function clearValue(key: string, i: number): void {
        if (key === 'Backspace') {
            let copyValues: string[] = [...values];
            copyValues[i] = '';
            nextTab(i - 1);
            setValues(copyValues);
            setCode(copyValues.join(''));
        }
    }

    useEffect(() => {
        nextTab(0);
    }, []);

    return (
        <div className={cn(s._, className, {
            [s.error]: hasError
        })}>
            {hasError && <p className={s.error_text}>Wrong code! Try again</p>}

            {values.map((v, i) =>
                <input
                    key={i}
                    id={'code_input_' + i}
                    type="text"
                    placeholder=" "
                    value={v}
                    onChange={e => onChange(e.target.value, i)}
                    onKeyDown={e => clearValue(e.key, i)}
                />
            )}
        </div>
    );
}

export default CodeInput;