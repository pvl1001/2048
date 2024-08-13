import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {LeaderBoardResult, PlayerResult} from "entities/result_card";
import {MatchState} from "shared/common/MatchState";
import {TAvatarName} from "shared/model/profile";
import BlockPlayer from "./block_player/BlockPlayer";
import s from "./LeaderBoardCard.scss";
import PlayerCardPlace from "./player_card_place/PlayerCardPlace";
import PlayerCardPrize from "./player_card_prize/PlayerCardPrize";
import {getAvatarSrc} from "../lib/getAvatarSrc";


type PlayerCardProps = {
    playerResult: LeaderBoardResult
}

export function LeaderBoardCard({playerResult}: PlayerCardProps) {
    const profileId: string = useAppSelector(select.profile._id);
    const profileName: string = useAppSelector(select.profile._name);
    const profileAvatarId: TAvatarName = useAppSelector(select.profile._avatarId);

    let {
        name,
        place,
        score,
        state,
        rewards,
        avatarId,
        playerId,
    } = playerResult as PlayerResult;

    const isSearching: boolean = playerResult === 'searching';
    const isCurrentUser: boolean = playerId === +profileId;
    const isActive: boolean = !isSearching && isCurrentUser;
    const isOngoing: boolean = state === MatchState.ONGOING;
    const isRewards: boolean = JSON.stringify(rewards) !== '{}';

    if (isCurrentUser) {
        avatarId = profileAvatarId;
        name = profileName;
    }

    const className: string = cn(s._, {
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
