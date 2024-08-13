import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {StorageItem} from "shared/common/StorageItem";
import {Cookie} from "shared/lib/Cookie";
import {TutorialUtils} from "shared/lib/TutorialUtils";
import {Api} from "../../api/Api";
import {registrationActions, RegistrationDataStep3} from "../../model/RegistrationSlice";
import {RegistrationPayloadStep3} from "../../types";


export type UseModalRegistration = {
    step: number
    nextStep: (stepNumber?: number) => void
    resetStep: () => void
    resetSendCodeEmail: () => Promise<void>
    confirmEmailCodeSubmit: (code: string) => void
    isPendingModal: boolean
}

export function useModalRegistration(): UseModalRegistration {
    const dispatch = useAppDispatch();
    const step: number = useAppSelector(select.registration._step);
    const formStep3: RegistrationDataStep3 = useAppSelector(select.registration._step3);
    const isPendingModal: boolean = useAppSelector(select.registration._isPending);

    function resetStep() {
        dispatch(registrationActions.setStep(1));
    }

    function nextStep(stepNumber: number = 1): void {
        dispatch(registrationActions.setStep(step + stepNumber));
    }

    async function resetSendCodeEmail(): Promise<void> {
        const payload: RegistrationPayloadStep3 = {
            ...formStep3,
            birthDay: +formStep3.birthDay.value,
            birthMonth: +formStep3.birthMonth.value,
            birthYear: +formStep3.birthYear.value,
        };
        await Api.registerAccount(payload);
    }

    function clearLocalStorage() {
        delete localStorage[StorageItem.DATE_REGISTER];
        delete localStorage[StorageItem.REQUEST_COUNTER];
        delete localStorage[StorageItem.DATE_CONFIRM_CODE];
        delete localStorage[StorageItem.REG_CONTINUE];
    }

    function confirmEmailCodeSubmit(code: string) {
        const token: string | void = '1111';
        Cookie.set('token', token);
        clearLocalStorage();
        nextStep();
        TutorialUtils.setTutorialStorage();
    }

    useEffect(() => () => {
        dispatch(registrationActions.resetRegistration());
    }, []);

    return {
        resetSendCodeEmail,
        confirmEmailCodeSubmit,
        step,
        nextStep,
        resetStep,
        isPendingModal,
    };
}
