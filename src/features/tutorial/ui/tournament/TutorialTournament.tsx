import cn from "classnames";
import {useLayoutEffect} from "react";
import cubeImg from "shared/assets/images/cube/cube_register-now.webp";
import s from "./TutorialTournament.scss";


export function TutorialTournament() {

    useLayoutEffect(() => {
        let el: HTMLElement | null = document.getElementById('tutorial_tournaments');
        el?.scrollIntoView({behavior: 'smooth'});
        document.body.classList.add('tutorial');
        return () => {
            document.body.classList.remove('tutorial');
        };
    }, []);

    return (
        <div className={'modal'}>
            <div className={cn(s._, 'modal-container')}>
                <div className={s.img_container}>
                    <img src={cubeImg} alt="cube register now"/>
                </div>
                <p className={cn(s.content, 'content')}>
                    Click the card to enter <br/> the tournament!
                </p>
            </div>
        </div>
    );
}
