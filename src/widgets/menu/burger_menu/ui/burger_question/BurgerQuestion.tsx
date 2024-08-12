import {ReactComponent as ArrowIcon} from 'shared/assets/icons/arrow_back.svg';
import s from "./BurgerQuestion.module.scss";


export type BurgerQuestionProps = {
    question: string
}

function BurgerQuestion({question}: BurgerQuestionProps) {
    return (
        <div className={s._}>
            {question} <ArrowIcon className={s.arrow}/>
        </div>
    );
}

export default BurgerQuestion;