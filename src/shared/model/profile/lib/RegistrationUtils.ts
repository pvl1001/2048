import {StorageItem} from "shared/common/StorageItem";
import {LocalStorage} from "shared/lib/LocalStorage";


export class RegistrationUtils {
    static removeIsLogout() {
        LocalStorage.removeValue(StorageItem.IS_GUEST);
    }

    static setLogout() {
        LocalStorage.setKeyValue(StorageItem.IS_GUEST, true);
    }

    static checkIsGuest(): boolean {
        return LocalStorage.hasValue(StorageItem.IS_GUEST);
    }
}

