import {select, useAppSelector} from "app/store";
import {FormikProps} from "formik";
import {RefObject, useEffect, useRef} from "react";
import {TSupportForm} from "../types";


export type UseSetProfileEmail = {
    formikRef: RefObject<FormikProps<TSupportForm>>
}

export function useSetProfileEmail(): UseSetProfileEmail {
    let formikRef = useRef<FormikProps<TSupportForm>>(null);
    let isAuth: boolean = useAppSelector(select.profile._isAuth);
    let profileEmail: string = useAppSelector(select.profile._email);

    useEffect(() => {
        let formik = formikRef.current;
        if (formik && !formik.values.email && profileEmail) {
            formik.setFieldValue('email', profileEmail);
        }
    }, [isAuth]);

    return {formikRef};
}
