import {LeaderBoardResult, PlayerResult} from "entities/result_card";
import {MatchState} from "shared/common/MatchState";


export function sortLeaderBoard(arr: LeaderBoardResult[]): LeaderBoardResult[] {
    let result = {
        search: [] as 'searching'[],
        ongoing: [] as PlayerResult[],
        reward: [] as PlayerResult[]
    };

    return arr.reduce((_, el) => {
        if (el === 'searching') {
            result.search.push(el);
        } else if (el.state === MatchState.ONGOING) {
            result.ongoing.push(el);
        } else {
            result.reward.push(el);
            result.reward.sort((a: PlayerResult, b: PlayerResult) => a.place - b.place);
        }
        return [
            ...result.reward,
            ...result.ongoing,
            ...result.search,
        ];
    }, [] as LeaderBoardResult[]);
}