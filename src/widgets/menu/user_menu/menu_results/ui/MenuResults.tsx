import {useAppDispatch} from "app/store";
import {LeaderBoardResult, MatchInfo, PlayerResult, playersResultsActions, ResultCard, TournamentGroup} from "entities/result_card";
import {forwardRef, Ref} from "react";
import {UseMenu, useMenu} from "shared/lib/hooks";
import {ScrollContent} from "shared/ui/scroll_content";
import {Menu} from "../../../";
import useMenuResults from "../lib/useMenuResults";
import EmptyTournaments from "./empty_tournaments/EmptyTournaments";
import s from './MenuResults.scss';
import ResultTitle from "./result_title/ResultTitle";


function MenuResults({}, ref: Ref<HTMLDivElement>) {
    let dispatch = useAppDispatch();
    let tournamentGroups: TournamentGroup[] = useMenuResults();
    let {isShowMenu, onOpenMenu, onCloseMenu}: UseMenu = useMenu();

    function onClickLeaderBoard(match: MatchInfo): void {
        let searchingCards: Array<'searching'> = Array(match.maxPlayersCount - match.currentPlayersCount).fill('searching');
        let sortPlayerResult: PlayerResult[] = [...match.playersResults].sort((a, b) => a.place - b.place);
        let playersResultsWithSearching: LeaderBoardResult[] = [...sortPlayerResult, ...searchingCards];
        dispatch(playersResultsActions.setPlayersResults(playersResultsWithSearching));
        onOpenMenu('result');
    }

    return (
        <>
            <ScrollContent ref={ref}>
                {tournamentGroups.length
                    ? <ul className={s.list_group}>
                        {tournamentGroups.map(({title, matchInfo}: TournamentGroup) => !!matchInfo.length &&
                            <li key={title}>
                                <ResultTitle>{title}</ResultTitle>
                                <ul className={s.list_tournaments}>
                                    {matchInfo.map((match: MatchInfo) =>
                                        <ResultCard
                                            key={match.id}
                                            result={match}
                                            onClick={() => onClickLeaderBoard(match)}
                                        />
                                    )}
                                </ul>
                            </li>
                        )}
                    </ul>
                    : <EmptyTournaments/>
                }
            </ScrollContent>

            <Menu.LeaderBoard
                isShowMenu={isShowMenu.result}
                onCloseMenu={() => onCloseMenu('result')}
                className={s.leader_board_menu}
                isContext
            />
        </>
    );
}

export default forwardRef(MenuResults);