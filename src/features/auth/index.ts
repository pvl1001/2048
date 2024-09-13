export {registrationReducer, registrationActions} from './model/RegistrationSlice';
export {RegistrationSelectors} from './model/RegistrationSelectors';
export type {FlagId, RegistrationFormStep3} from './types';

export {CodeConfirm} from './ui/code_confirm/CodeConfirm';
export {RegistrationPhone} from './ui/registration_phone/RegistrationPhone';

export {useCodeConfirm} from './lib/hooks/useCodeConfirm';
export type{UseCodeConfirm} from './lib/hooks/useCodeConfirm';

export {useModalRegistration} from './lib/hooks/useModalRegistration';
export type {UseModalRegistration} from './lib/hooks/useModalRegistration';

export {useRegistrationPhone} from './lib/hooks/useRegistrationPhone';
export type {UseFormRegistrationPhone} from './lib/hooks/useRegistrationPhone';

export {useContinueRegistration} from './lib/hooks/useContinueRegistration';
export {RegistrationStep3} from './ui/registration_step_3/RegistrationStep3';

export {useValidateRegion} from './lib/hooks/useValidateRegion';
export type {UseValidateRegion} from './lib/hooks/useValidateRegion';

export {SignOut} from './ui/sign_out/SignOut';

