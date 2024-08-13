import {CodeConfirm, RegistrationPhone, useCodeConfirm, UseCodeConfirm, UseFormRegistrationPhone, useModalRegistration, UseModalRegistration, useRegistrationPhone} from "features/auth";


export function ModalLogin() {
    const {step, nextStep}: UseModalRegistration = useModalRegistration();
    const {onSubmitLogin, isPending}: UseFormRegistrationPhone = useRegistrationPhone(nextStep);
    const {resetSendCode, confirmLoginPhone}: UseCodeConfirm = useCodeConfirm(nextStep);

    return (
        <>
            {/*{process.env.NODE_ENV === 'development' &&*/}
            {/*    <DevelopDescription>*/}
            {/*        <p>Для теста использовать код подтверждения '111111'</p>*/}
            {/*    </DevelopDescription>}*/}

            {step === 1 && <RegistrationPhone
                title={'Please enter your phone number to log in'}
                onSubmit={onSubmitLogin}
                nextStep={nextStep}
                isPending={isPending}
            />}

            {step === 2 && <CodeConfirm
                title={'A 6-digit code has been sent to you by SMS, please enter it'}
                nextStep={nextStep}
                resetSendCode={resetSendCode}
                submitHandler={confirmLoginPhone}
            />}
        </>
    );
}
