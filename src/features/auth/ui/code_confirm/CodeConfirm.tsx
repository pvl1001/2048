import {FormEvent, useState} from "react";
import BackIcon from 'shared/assets/icons/arrow_back.svg?react';
import getErrorMessage from "shared/lib/GetErrorMessage";
import {Button} from "shared/ui/button";
import CodeInput from "./code_input/CodeInput";
import CodeTimer from "./code_timer/CodeTimer";
import s from "./CodeConfirm.module.scss";


type Props = {
    title: string
    nextStep: (stepNumber?: number) => void
    resetSendCode: () => Promise<void>
    submitHandler: (code: string) => void
}

export function CodeConfirm({resetSendCode, submitHandler, nextStep, title}: Props) {
    const initialValues: string[] = Array(6).fill('');
    const [code, setCode] = useState(initialValues.join(''));
    const [values, setValues] = useState(initialValues);
    const [hasError, setHasError] = useState(false);
    const [isPending, setIsPending] = useState(false);

    function nextTab(i: number): void {
        const $el: HTMLElement | null = document.getElementById('code_input_' + i);
        $el?.focus();
    }

    function clearCode() {
        setCode('');
        setValues(initialValues);
        nextTab(0);
    }

    async function reset(): Promise<void> {
        clearCode();
        setHasError(false);
        try {
            await resetSendCode();
        } catch (err) {
            alert(getErrorMessage(err));
        }
    }

    async function submit(e: FormEvent): Promise<void> {
        e.preventDefault();
        try {
            setIsPending(true);
            submitHandler(code);
        } catch (err) {
            clearCode();
            setHasError(true);
            console.log(getErrorMessage(err));
        } finally {
            setIsPending(false);
        }
    }

    return (
        <>
            <button className={s.back_btn} onClick={() => nextStep(-1)}>
                <BackIcon/>
            </button>

            <h3 className={s.title}>{title}</h3>

            <form onSubmit={submit}>
                <CodeInput
                    className={s.input_code}
                    values={values}
                    setValues={setValues}
                    setCode={setCode}
                    nextTab={nextTab}
                    hasError={hasError}
                />

                <CodeTimer reset={reset}/>

                <div className={s.button}>
                    <Button
                        tabIndex={0}
                        type={'submit'}
                        isPending={isPending}
                        disabled={code.length < 6 || isPending}
                    >Apply</Button>
                </div>
            </form>

        </>
    );
}
