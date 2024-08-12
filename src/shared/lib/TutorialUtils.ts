import {StorageItem} from "shared/common/StorageItem";


export class TutorialUtils {
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
        let isTutorial: boolean = !!localStorage[StorageItem.TUTORIAL];
        if (isTutorial) {
            this.clearTutorialStorage();
            this.setTutorialFinishStorage();
        }
    }
}