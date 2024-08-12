import {StorageItem} from "shared/common/StorageItem";


export class TutorialUtils {
    static isTutorial(): boolean {
        return !!localStorage[StorageItem.TUTORIAL];
    }

    static clearTutorialStorage() {
        delete localStorage[StorageItem.TUTORIAL];
    }

    static clearTutorialFinishStorage() {
        delete localStorage[StorageItem.TUTORIAL_FINISH];
    }

    static setTutorialStorage() {
        localStorage[StorageItem.TUTORIAL] = true;
    }

    static setTutorialFinishStorage() {
        localStorage[StorageItem.TUTORIAL_FINISH] = true;
    }

    static finishTutorial() {
        this.clearTutorialStorage();
        this.setTutorialFinishStorage();
    }
}