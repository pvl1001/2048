import {select, useAppDispatch, useAppSelector} from "app/store";
import {useNavigateModal} from "shared/lib/hooks";
import {thunkSetProfileAttrs} from "shared/model/profile";
import {LevelStar} from "shared/ui/level_star";
import {ModalWrapper} from "shared/ui/modal";
import s from "./LevelUp.module.scss";


export function LevelUp() {
    let dispatch = useAppDispatch();
    let level: number = useAppSelector(select.profile._level);
    let {closeModal} = useNavigateModal();

    function setLevelAttr() {
        dispatch(thunkSetProfileAttrs({level}));
    }

    // useMemo(setLevelAttr, []);

    return (
        <ModalWrapper className={s._} onClick={closeModal}>
            <LevelStar level={level} className={s.star}/>
            <h2 className={s.text}>LEVEL UP!</h2>
        </ModalWrapper>
    );
}
