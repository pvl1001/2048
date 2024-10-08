import cn from "classnames";
import ClockIcon from 'shared/assets/icons/clock.svg?react';
import {useTimer} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import useButtonTimer from "../../lib/useButtonTimer";
import s from "./ButtonTimer.module.scss";


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