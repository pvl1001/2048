import {select, useAppSelector} from "app/store";
import {LeaderBoardCard} from "entities/leader_board_card";
import {LeaderBoardResult} from "entities/result_card";
import {Button} from "shared/ui/button";
import {MenuTitle} from "shared/ui/menu_title";
import {ScrollContent} from "shared/ui/scroll_content";
import {TooltipQuestion} from "shared/ui/tooltip_question";
import s from "./LeaderBoard.scss";
import {sortLeaderBoard} from "../../lib/sortLeaderBoard";
import ResultTitle from "../result_title/ResultTitle";


type LeaderBoardProps = {
    onCloseMenu: () => void
}

function LeaderBoard({onCloseMenu}: LeaderBoardProps) {
    const playersResults: LeaderBoardResult[] = useAppSelector(select.playersResults._leaderBoard);
    const isWaiting: boolean = playersResults.some((r: LeaderBoardResult) => r === 'searching');

    return (
        <>
            <MenuTitle className={s.title}>Results pending</MenuTitle>

            <TooltipQuestion
                className={s.tooltip_question}
                content={<p className={s.tooltip_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>}
            />

            <ResultTitle className={s.result_title}>Tournament: Prosperous wins</ResultTitle>

            <ScrollContent className={s.tab_content}>
                <ul className={s.list}>
                    {sortLeaderBoard(playersResults).map((result: LeaderBoardResult, i: number) =>
                        <LeaderBoardCard
                            key={result !== 'searching' ? result.playerId : i}
                            playerResult={result}
                        />
                    )}
                </ul>
            </ScrollContent>

            <div className={s.footer}>

                {isWaiting && <p className={s.waiting_text}>Waiting for others players...</p>}

                <Button
                    className={s.btn}
                    onClick={onCloseMenu}
                >Close</Button>

            </div>
        </>
    );
}

export default LeaderBoard;