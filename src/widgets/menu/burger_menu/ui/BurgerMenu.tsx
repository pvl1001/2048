import cn from "classnames";
import {useCallback, useState} from "react";
import helpData from '../lib/FAQ';
import {TFaqItem, TFaqKey, THelpMenu, THelpMenuKeys} from "../types";
import BurgerAnswerMenu from "./burger_answer_menu/BurgerAnswerMenu";
import BurgerHelpMenu from "./burger_help_menu/BurgerHelpMenu";
import {BurgerMainMenu} from "./burger_main_menu/BurgerMainMenu";
import BurgerQuestionsList from "./burger_questions_list/BurgerQuestionsList";
import s from './BurgerMenu.module.scss';


type BurgerMenuProps = {
    isShowMenu: boolean
    onCloseMenu: () => void
}

export const initialHelpMenu = {
    help: false,
    payments: false,
    account: false,
    gameplay: false,
    general: false,
    offers: false,
    answer: false,
    searchAnswer: false,
};

export function BurgerMenu({isShowMenu, onCloseMenu}: BurgerMenuProps) {
    const [menu, setMenu] = useState<THelpMenu>(initialHelpMenu);
    const [currentQuestion, setCurrentQuestion] = useState<TFaqItem | null>(null);
    const helpDataKeys = Object.keys(helpData) as TFaqKey[];

    const goToMenu = useCallback((key: THelpMenuKeys | null, bool: boolean = true) => {
        if (key) {
            setMenu(prev => ({...prev, [key]: bool}));
        }
    }, []);

    const openAnswer = useCallback((faqItem: TFaqItem) => {
        setCurrentQuestion(faqItem);
        goToMenu('answer');
    }, []);

    return (
        <>
            <BurgerMainMenu isShowMenu={isShowMenu} showHelpMenu={() => goToMenu('help')} onBack={onCloseMenu}/>
            <BurgerHelpMenu
                title={'Help'}
                name={'help'}
                menu={menu}
                goToMenu={goToMenu}
            >
                <div className={s.menus}>
                    <ul className={cn(s.list, s.help_list)}>
                        <li onClick={() => goToMenu('payments')}>Payments</li>
                        <li onClick={() => goToMenu('account')}>Account</li>
                        <li onClick={() => goToMenu('gameplay')}>Gameplay</li>
                        <li onClick={() => goToMenu('general')}>General</li>
                        <li onClick={() => goToMenu('offers')}>Special offers</li>
                    </ul>
                </div>
            </BurgerHelpMenu>

            {helpDataKeys.map((key: TFaqKey) => {
                const {title, faq} = helpData[key];
                return <BurgerHelpMenu
                    key={key}
                    faqKey={key}
                    title={title}
                    name={key}
                    menu={menu}
                    goToMenu={goToMenu}
                >
                    <BurgerQuestionsList
                        faq={faq}
                        openAnswer={openAnswer}
                        className={s.questions_list}
                    />

                    <BurgerAnswerMenu
                        isShowMenu={menu.answer}
                        faqItem={currentQuestion}
                    />
                </BurgerHelpMenu>;
            })}
        </>
    );
}
