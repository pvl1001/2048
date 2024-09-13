import {Place} from "shared/api/server_service";
import Place1 from 'shared/assets/icons/top1.png';
import Place2 from 'shared/assets/icons/top2.png';
import Place3 from 'shared/assets/icons/top3.png';
import s from "./BlockPlayer.module.scss";


type BlockPlayerProps = {
    avatarSrc: string
    name: string
    score?: number
    place: Place
    isSearching: boolean
    isRewards: boolean
    isOngoing: boolean
}

function BlockPlayer({avatarSrc, name, score, place, isSearching, isRewards, isOngoing}: BlockPlayerProps) {
    return (
        <div className={s._ + ' block_player'}>

            <div className={s.avatar}>
                {isSearching
                    ? <div className={s.avatar__empty}>?</div>
                    : <img className={s.avatar__img} src={avatarSrc} alt="avatar"/>
                }

                {place > 0 && place < 4 && isRewards && !isOngoing &&
                    <img
                        className={s.avatar__top_img}
                        src={[Place1, Place2, Place3][place - 1]}
                        alt={`top-${place}`}
                    />
                }
            </div>

            <div>
                {name && <p className={s.name}>{name}</p>}

                {isSearching
                    ? <p className={s.state_text}>Searching for opponent...</p>
                    : isOngoing
                        ? <p className={s.state_text}>Now playing</p>
                        : <p className={s.score + ' score'}>
                            <span className={s.score__title}>Score:</span>
                            <span className={s.score__value}>{score || 0}</span>
                        </p>
                }

            </div>

        </div>
    );
}

export default BlockPlayer;