import {StorageItem} from "shared/common/StorageItem";
import {Cookie} from "shared/lib/Cookie";
import {useNavigateModal} from "shared/lib/hooks";


export type UseCodeConfirm = {
    resetSendCode: () => Promise<void>
    confirmRegistrationPhone: (code: string) => Promise<void>
    confirmLoginPhone: (code: string) => Promise<void>
}

export function useCodeConfirm(nextStep: () => void): UseCodeConfirm {
    const {closeModal} = useNavigateModal();

    async function resetSendCode(): Promise<void> {
        // await Api.registerPhone(phone);
    }

    async function confirmRegistrationPhone(code: string): Promise<void> {
        localStorage[StorageItem.REG_CONTINUE] = true;
        nextStep();
    }

    async function confirmLoginPhone(code: string): Promise<void> {
        const token: string = '1111';
        if (token) {
            Cookie.set('token', token);
            // await ServerService.setRefreshToken();
            closeModal();
        } else {
            throw Error('error token: ' + token);
        }
    }

    return {
        resetSendCode,
        confirmRegistrationPhone,
        confirmLoginPhone,
    };
}
