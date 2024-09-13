import {ChangeEvent, useRef, useState} from "react";
import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {Field, Form, Formik, FormikProps} from "formik";
import {BuyStore} from "shared/common/BuyStore";
import {Errors} from "shared/common/Errors";
import {UseGetCurrency, useGetCurrency} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import s from "./PromoCode.module.scss";
import {PromoCodeForm} from "./types";


export function PromoCodeSubmit() {
    const {buyItem}: UseGetCurrency = useGetCurrency(true);
    const isPending: boolean = useAppSelector(select.profile._isPending);
    const [error, setError] = useState('');
    const formikRef = useRef<FormikProps<PromoCodeForm>>(null);
    const formik = formikRef.current;

    async function onSubmit(e: PromoCodeForm) {
        try {
            await buyItem(BuyStore.ID_PROMO + e.code);
            formik?.resetForm();
        } catch (err) {
            setError(Errors.PROMOCODE);
        }
    }

    return (
        <Formik<PromoCodeForm>
            innerRef={formikRef}
            initialValues={{code: ''}}
            onSubmit={onSubmit}
        >
            {({values, setFieldValue}) =>
                <Form className={cn(s._, s._submit)}>
                    <div className={s.text_container}>
                        <h5 className={s.title}>
                            Enter promo codes and get bonuses:
                        </h5>
                    </div>

                    <Field
                        as={Input}
                        name={'code'}
                        className={s.field}
                        placeholder={'Enter promocodes...'}
                        isBigStyle
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            if (error) setError('');
                            return setFieldValue('code', e.target.value);
                        }}
                        error={error}
                    />

                    <Button
                        type="submit"
                        theme={'orange'}
                        className={s.button}
                        isPending={isPending}
                        disabled={!values.code || !!error}
                    >
                        Confirm
                    </Button>
                </Form>
            }
        </Formik>
    );
}
