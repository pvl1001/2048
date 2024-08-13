import {memo} from "react";
import {Link} from "react-router-dom";
import {RoutePaths} from "shared/common/RoutePaths";
import s from "./BurgerAnswerMenu.module.scss";
import {TFaqItem} from "../../types";
import BurgerMenuWrapper from "../burger_menu_wrapper/BurgerMenuWrapper";
import BurgerQuestion from "../burger_question/BurgerQuestion";


export type BurgerAnswerMenuProps = Partial<TFaqItem> & {
    isShowMenu: boolean
    faqItem: TFaqItem | null
}

function BurgerAnswerMenu({isShowMenu, faqItem}: BurgerAnswerMenuProps) {
    return (
        <BurgerMenuWrapper
            isShowMenu={isShowMenu}
            overlay={false}
            className={s.context_menu}
        >
            {faqItem &&
                <div className={s._}>
                    <BurgerQuestion question={faqItem.question}/>
                    <div className={s.hr}/>
                    <div className={s.answer_container}>
                        {faqItem.answer}
                    </div>

                    <Link className={s.support_link} to={RoutePaths.SUPPORT}>
                        Still need help? Contact us
                    </Link>
                </div>
            }
        </BurgerMenuWrapper>
    );
}

export default memo(BurgerAnswerMenu);