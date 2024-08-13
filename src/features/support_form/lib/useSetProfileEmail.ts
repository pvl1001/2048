import {RefObject, useEffect, useRef} from "react";
import {select, useAppSelector} from "app/store";
import {FormikProps} from "formik";
import {TSupportForm} from "../types";


export type UseSetProfileEmail = {
    formikRef: RefObject<FormikProps<TSupportForm>>
}

export function useSetProfileEmail(): UseSetProfileEmail {
    const formikRef = useRef<FormikProps<TSupportForm>>(null);
    const isAuth: boolean = useAppSelector(select.profile._isAuth);
    const profileEmail: string = useAppSelector(select.profile._email);

    useEffect(() => {
        const formik = formikRef.current;
        if (formik && !formik.values.email && profileEmail) {
            formik.setFieldValue('email', profileEmail);
        }
    }, [isAuth]);

    return {formikRef};
}
