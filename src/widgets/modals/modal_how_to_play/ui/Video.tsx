import {memo, useEffect, useRef} from "react";
import {HowToPlaySlide} from "../types";
import s from "./ModalHowToPlay.scss";


type Props = {
    slide: HowToPlaySlide
    isCurrentSlide: boolean
    setIsLoadingEnded: () => void
}

export const Video = memo(({slide, isCurrentSlide, setIsLoadingEnded}: Props) => {
        const ref = useRef<HTMLVideoElement>(null);

        useEffect(() => {
            let $video = ref.current;
            if (isCurrentSlide && $video) {
                $video.onloadeddata = setIsLoadingEnded; // записать флаг окончания загрузки видео
                $video.currentTime = 0; // начать видео сначала
                $video.play(); // запустить видео
            }
        }, [isCurrentSlide]);

        return (
            <div className={s.slide}>
                <h4 className={s.title}>{slide.headTitle}</h4>
                <video
                    ref={ref}
                    muted
                    className={s.video}
                    preload="none"
                    src={slide.video}
                    loop
                    playsInline
                />
                <h5>{slide.title}</h5>
                <p className={s.description}>{slide.description}</p>
            </div>
        );
    }
);
