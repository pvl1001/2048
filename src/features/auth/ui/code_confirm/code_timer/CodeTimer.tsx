import cn from "classnames";
import {UseTimer, useTimer} from "shared/lib/hooks";
import s from "./CodeTimer.module.scss";


type CodeTimerProps = {
    reset: () => Promise<void>
}

function CodeTimer({reset}: CodeTimerProps) {
    const {timer, resetTimer}: UseTimer = useTimer(90);

    async function sendCode() {
        await reset();
        resetTimer(90);
    }

    return (
        <p className={s._}>
            Resending code after&nbsp;
            {timer === '00:00'
                ? <span className={cn(s.time, s.send_code)} onClick={sendCode}>SEND CODE</span>
                : <span className={s.time}>{timer}</span>
            }

        </p>
    );
}

export default CodeTimer;