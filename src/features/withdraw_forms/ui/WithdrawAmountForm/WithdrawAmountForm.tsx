import {Field, Form, Formik} from "formik";
import {ChangeEvent, useState} from "react";
import {Mask} from "shared/lib/Mask";
import {Button} from "shared/ui/button";
import {ButtonWithTooltip} from "shared/ui/button_with_tooltip";
import {UseProcessPayout, useProcessPayout} from "../../lib/useProcessPayout";
import {regex, withDollar} from "../../lib/WithdrawAmountUtils";
import {WithdrawAmountForm} from "../../types";
import s from './WithdrawAmountForm.scss';


type WithdrawAmountProps = {
    setAmountValue: (amountValue: number) => void
    amountCurrency: number
    setIsSubmit: (isSubmit: true) => void
    isWithdrawFinish: boolean
}

export function WithdrawAmountForm({setAmountValue, amountCurrency, setIsSubmit, isWithdrawFinish}: WithdrawAmountProps) {
    let [apiError, setApiError] = useState('');
    let {isPending, isProcessDisabled}: UseProcessPayout = useProcessPayout({isWithdrawFinish, setApiError});

    function validate(value: string): void {
        if (isProcessDisabled) {
            return;
        }
        let replaceVal: number = +value.replace('$', '');
        if (replaceVal < 5) return setApiError('Minimal withdrawal amount is 5$');
        setApiError('');
    }

    function setValue(amountValue: string) {
        let value: number = +amountValue.replace(regex, '');
        if (!value) {
            return validate(String(value));
        }
        value = +value.toFixed(1) * 100;
        setAmountValue(value);
    }

    async function onSubmit({amountValue}: WithdrawAmountForm) {
        if (amountValue === '0$') {
            return validate(amountValue);
        }
        setValue(amountValue);
        setIsSubmit(true);
    }

    return (
        <Formik<WithdrawAmountForm>
            initialValues={{amountValue: '0$'}}
            onSubmit={onSubmit}
        >
            {({setFieldValue, values}) =>
                <Form className={s._}>
                    <div className={s.row}>
                        <p>Withdrawable amount:</p>
                        <div className={s.field_container}>
                            <div className={s.field_value}></div>
                            <Field
                                name={'amountValue'}
                                autoComplete={'off'}
                                className={s.field}
                                value={Mask.numberWithDot(values.amountValue)}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setFieldValue('amountValue', Mask.numberWithDot(e.target.value))}
                                onBlur={() => setFieldValue('amountValue', withDollar(values.amountValue))}
                                validate={validate}
                            />
                            <Button
                                className={s.max_button}
                                onClick={() => setFieldValue('amountValue', withDollar(String(Mask.hardCurrency(amountCurrency))))}
                            >MAX</Button>
                        </div>
                    </div>

                    <ButtonWithTooltip
                        type="submit"
                        theme={'orange'}
                        className={s.submit_button}
                        disabled={!!apiError}
                        error={apiError}
                        isPending={isPending}
                    >
                        Submit withdrawal
                    </ButtonWithTooltip>
                </Form>
            }
        </Formik>
    );
}
