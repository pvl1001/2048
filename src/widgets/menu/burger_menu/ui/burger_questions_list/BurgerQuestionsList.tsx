import cn from "classnames";
import {memo} from "react";
import {TFaqItem} from "../../types";
import BurgerQuestion from "../burger_question/BurgerQuestion";
import s from "./BurgerQuestionsList.module.scss";


export type BurgerQuestionsListProps = {
    faq: TFaqItem[]
    openAnswer: (faqItem: TFaqItem) => void
    className?: string
}

function BurgerQuestionsList({className, faq, openAnswer}: BurgerQuestionsListProps) {
    return (
        <ul className={cn(s._, className)}>
            {faq.map((faqItem: TFaqItem) =>
                <li key={faqItem.question} onClick={() => openAnswer(faqItem)}>
                    <BurgerQuestion question={faqItem.question}/>
                </li>
            )}
        </ul>
    );
}

export default memo(BurgerQuestionsList);