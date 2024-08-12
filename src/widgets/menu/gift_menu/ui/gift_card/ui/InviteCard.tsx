import {select, useAppSelector} from "app/store";
import cn from "classnames";
import {Link} from "react-router-dom";
import CubeIcon from "shared/assets/icons/happy_cube_dark.png";
import {RoutePaths} from "shared/common/RoutePaths";
import {Button} from "shared/ui/button";
import s from "./GiftCard.scss";


type InviteProps = {
    onClick: () => void
}

export function InviteCard({onClick}: InviteProps) {
    let isAuth: boolean = useAppSelector(select.profile._isAuth);
    let inviteCount: number = useAppSelector(select.profile._inviteRewards);
    let {maxInvites} = useAppSelector(select.config._designInt);

    return (
        <li className={cn(s._, s._invite)}>
            <div className={s.img}>
                <div className={s.img__img}/>
                <p className={s.img__text}>INVITE <br/> FRIENDS!</p>
            </div>

            <p className={s.invited}>
                {isAuth
                    ? `Friends invited: ${inviteCount}/${maxInvites}`
                    : <>Available only to registered users <Link to={RoutePaths.REGISTRATION} replace>Registration</Link></>
                }
            </p>

            {(!isAuth || inviteCount < maxInvites) &&
                <Button
                    className={s.button}
                    onClick={onClick}
                    disabled={!isAuth}
                >
                    Invite
                </Button>
            }

            {(isAuth && inviteCount >= maxInvites) &&
                <Button disabled className={cn(s.button, s.invite_disabled_button)}>
                    <img src={CubeIcon} alt="cube icon"/>
                    Invitations are over
                </Button>
            }
        </li>
    );
}
