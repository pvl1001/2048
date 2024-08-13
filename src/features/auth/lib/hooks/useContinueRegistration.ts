import {useEffect} from "react";
import {useAppDispatch} from "app/store";
import {StorageItem} from "shared/common/StorageItem";
import {TValidationSchema, useValidationSchema} from "shared/lib/hooks";
import {thunkRegistrationContinue} from "../../model/RegistrationThunks";


export function useContinueRegistration() {
    const dispatch = useAppDispatch();
    const validationSchema: TValidationSchema = useValidationSchema();

    useEffect(() => {
        if (localStorage[StorageItem.REG_CONTINUE]) {
            dispatch(thunkRegistrationContinue(validationSchema));
        }
    }, []);
}
