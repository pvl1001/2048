import {CodeConfirm, RegistrationPhone, RegistrationStep3, useCodeConfirm, UseCodeConfirm, useContinueRegistration, UseFormRegistrationPhone, useModalRegistration, UseModalRegistration, useRegistrationPhone} from "features/auth";
import s from './ModalRegistration.scss';


export function ModalRegistration() {
    useContinueRegistration();
    const {
        step,
        nextStep,
        resetSendCodeEmail,
        confirmEmailCodeSubmit,
    }: UseModalRegistration = useModalRegistration();
    const {resetSendCode, confirmRegistrationPhone}: UseCodeConfirm = useCodeConfirm(nextStep);
    const {onSubmitRegistration}: UseFormRegistrationPhone = useRegistrationPhone(nextStep);
    // let {isPending: isPendingValidate}: UseValidateRegion = useValidateRegion();

    return (
        <div className={s._}>
            {/*{process.env.NODE_ENV === 'development' &&*/}
            {/*    <DevelopDescription>*/}
            {/*        <p>1 шаг регистрации - Для теста использовать номер, начинающийся с '+70'</p>*/}
            {/*        <p>2 шаг регистрации - Для теста использовать код подтверждения '111111'</p>*/}
            {/*        <p>3 шаг регистрации - Для теста использовать почту заканчивающуюся на '@test.com'</p>*/}
            {/*        <p>4 шаг регистрации - Для теста использовать код подтверждения '111111'</p>*/}
            {/*    </DevelopDescription>}*/}

            {/*{(isPendingModal || isPendingValidate) && <Loader theme={'modal'}/>}*/}

            {step === 1 && <RegistrationPhone
                title={'To verify your phone number, a 6-digit code will be sent to you via SMS.'}
                nextStep={nextStep}
                onSubmit={onSubmitRegistration}
                isPending={false}
                isHaveAccount
            />}
            {step === 2 && <CodeConfirm
                title={'A 6-digit code has been sent to you by SMS, please enter it'}
                nextStep={nextStep}
                resetSendCode={resetSendCode}
                submitHandler={confirmRegistrationPhone}
            />}
            {step === 3 && <RegistrationStep3 nextStep={nextStep}/>}
            {step === 4 && <CodeConfirm
                title={'A 6-digit code has been sent to you by email, please enter it'}
                nextStep={nextStep}
                resetSendCode={resetSendCodeEmail}
                submitHandler={confirmEmailCodeSubmit}
            />}
        </div>
    );
}
