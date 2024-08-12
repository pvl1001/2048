import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {LeaderBoardResult, PlayerResult} from "entities/result_card";
import {MatchState} from "shared/common/MatchState";
import {TAvatarName} from "shared/model/profile";
import {getAvatarSrc} from "../lib/getAvatarSrc";
import BlockPlayer from "./block_player/BlockPlayer";
import s from "./LeaderBoardCard.scss";
import PlayerCardPlace from "./player_card_place/PlayerCardPlace";
import PlayerCardPrize from "./player_card_prize/PlayerCardPrize";


type PlayerCardProps = {
    playerResult: LeaderBoardResult
}

export function LeaderBoardCard({playerResult}: PlayerCardProps) {
    let profileId: string = useAppSelector(select.profile._id);
    let profileName: string = useAppSelector(select.profile._name);
    let profileAvatarId: TAvatarName = useAppSelector(select.profile._avatarId);

    let {
        name,
        place,
        score,
        state,
        rewards,
        avatarId,
        playerId,
    } = playerResult as PlayerResult;

    let isSearching: boolean = playerResult === 'searching';
    let isCurrentUser: boolean = playerId === +profileId;
    let isActive: boolean = !isSearching && isCurrentUser;
    let isOngoing: boolean = state === MatchState.ONGOING;
    let isRewards: boolean = JSON.stringify(rewards) !== '{}';

    if (isCurrentUser) {
        avatarId = profileAvatarId;
        name = profileName;
    }

    let className: string = cn(s._, {
        [s.active]: isActive,
        [s.searching]: isSearching,
    });

    return (
        <li className={className}>
            <PlayerCardPlace
                place={place}
                isOngoing={isOngoing}
            />

            <BlockPlayer
                avatarSrc={getAvatarSrc(avatarId)}
                name={name}
                score={score}
                place={place}
                isSearching={isSearching}
                isRewards={isRewards}
                isOngoing={isOngoing}
            />

            {isSearching && <div className={s.loupe}/>}
            {isOngoing && <div className={s.gamepad}/>}
            {(state === MatchState.FINISHED && isRewards && rewards) && <PlayerCardPrize rewards={rewards}/>}
        </li>
    );
}
