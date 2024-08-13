import cn from "classnames";
import {ReactComponent as ClockIcon} from 'shared/assets/icons/clock.svg';
import {useTimer} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import s from "./ButtonTimer.module.scss";
import useButtonTimer from "../../lib/useButtonTimer";


type ButtonTimerProps = {
    className?: string
}

function ButtonTimer({className}: ButtonTimerProps) {
    useTimer(-1);
    const time: string = useButtonTimer();

    return (
        <Button disabled className={cn(className, s._)}>
            <ClockIcon/>
            {time}
        </Button>
    );
}

export default ButtonTimer;