import {memo, PropsWithChildren, useCallback, useEffect, useState} from "react";
import loupeImg from "shared/assets/icons/search-gray.webp";
import {ButtonBack} from "shared/ui/button_back";
import {TFaqItem, TFaqKey, THelpMenu, THelpMenuKeys} from "../../types";
import BurgerAnswerMenu from "../burger_answer_menu/BurgerAnswerMenu";
import BurgerMenuWrapper from "../burger_menu_wrapper/BurgerMenuWrapper";
import BurgerQuestionsList from "../burger_questions_list/BurgerQuestionsList";
import BurgerSearch from "../burger_search/BurgerSearch";
import s from "../BurgerMenu.scss";


type BurgerHelpMenuProps = {
    name: THelpMenuKeys
    title: string
    menu: THelpMenu
    goToMenu: (key: THelpMenuKeys | null, bool?: boolean) => void
    faqKey?: TFaqKey
}

function BurgerHelpMenu({menu, goToMenu, faqKey, children, title, name, ...props}: PropsWithChildren<BurgerHelpMenuProps>) {
    let [searchValue, setSearchValue] = useState('');
    let [currentQuestion, setCurrentQuestion] = useState<TFaqItem | null>(null);
    let [searchResult, setSearchResult] = useState<TFaqItem[] | null>(null);

    function clearResult() {
        setSearchValue('');
        setSearchResult(null);
        setCurrentQuestion(null);
    }

    function openAnswer(faqItem: TFaqItem) {
        setCurrentQuestion(faqItem);
        goToMenu('searchAnswer');
    }

    let onSearch = useCallback((result: TFaqItem[]) => {
        setSearchResult(result);
    }, []);

    let setValue = useCallback((v: string) => {
        setSearchValue(v);
    }, []);

    let onBackHandler = useCallback(() => {
        if (menu.searchAnswer) {
            return goToMenu('searchAnswer', false);
        }
        if (menu.answer) {
            return goToMenu('answer', false);
        }
        clearResult();
        goToMenu(name, false);
    }, [menu.searchAnswer, menu.answer]);

    useEffect(() => {
        if (menu.searchAnswer) {
            goToMenu('searchAnswer', false);
        }
    }, [searchResult]);

    return (
        <BurgerMenuWrapper isShowMenu={menu[name]} {...props} overlay={false}>
            <div className={s._}>

                <ButtonBack className={s.back_button} onClick={onBackHandler}/>

                <h2 className={s.title}>{title}</h2>

                <BurgerSearch
                    faqKey={faqKey}
                    setValue={setValue}
                    onSearch={onSearch}
                    className={s.search}
                />

                <div className={s.content}>
                    {
                        searchValue && searchResult !== null
                            ? searchResult?.length
                                ? <BurgerQuestionsList // Меню поиска: вопросы
                                    faq={searchResult}
                                    openAnswer={openAnswer}
                                    className={s.questions_list}
                                />
                                : <div className={s.no_result}>
                                    <img src={loupeImg} alt="loupe"/>
                                    <p>No results, form again</p>
                                </div>
                            : children
                    }

                    <BurgerAnswerMenu // Меню поиска: ответы
                        isShowMenu={menu.searchAnswer}
                        faqItem={currentQuestion}
                    />
                </div>
            </div>
        </BurgerMenuWrapper>
    );
}

export default memo(BurgerHelpMenu);