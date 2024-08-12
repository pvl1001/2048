import {useAppDispatch} from "app/store";
import {useEffect} from "react";
import {StorageItem} from "shared/common/StorageItem";
import {TValidationSchema, useValidationSchema} from "shared/lib/hooks";
import {thunkRegistrationContinue} from "../../model/RegistrationThunks";


export function useContinueRegistration() {
    let dispatch = useAppDispatch();
    let validationSchema: TValidationSchema = useValidationSchema();

    useEffect(() => {
        if (localStorage[StorageItem.REG_CONTINUE]) {
            dispatch(thunkRegistrationContinue(validationSchema));
        }
    }, []);
}
