import {ClaimLevel} from "features/claim_level";
import cubeImage from 'shared/assets/images/cube/level-progress.webp';
import {BigModal, BigModalTitles} from "shared/ui/big_modal";
import s from "./LevelProgress.module.scss";
import Progress from "./progress/Progress";


export function LevelProgress() {
    return (
        <BigModal
            title={BigModalTitles.LEVEL_PROGRESS}
            description={'Level up and get lots of rewards!'}
            contentClass={s.content}
            action={<ClaimLevel/>}
        >
            <img src={cubeImage} alt="cube" className={s.image}/>
            <Progress/>
        </BigModal>
    );
}
