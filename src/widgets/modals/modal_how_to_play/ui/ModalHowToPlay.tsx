import {useCallback, useState} from "react";
import {BrowserName, getBrowserName} from "shared/lib/getBrowserName";
import {useNavigateModal} from "shared/lib/hooks";
import {Button} from "shared/ui/button";
import {ModalHead, ModalWrapper} from "shared/ui/modal";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import type {Swiper as SwiperClass} from "swiper/types";
import {slides} from "../lib/const";
import {HowToPlaySlide} from "../types";
import s from "./ModalHowToPlay.module.scss";
import {Video} from "./Video";


export function ModalHowToPlay() {
    const {closeModal} = useNavigateModal();
    const [slideIndex, setSlideIndex] = useState(0);
    const [isLoading, setIsLoading] = useState<boolean[]>([]);
    const [swiper, onSwiper] = useState<SwiperClass | null>(null);

    const settings: SwiperProps = {
        modules: [Pagination],
        onSwiper,
        pagination: {clickable: true},
        onSlideChange: (swiper) => setSlideIndex(swiper.activeIndex),
    };

    const setIsLoadingEnded = (isCurrentSlide: boolean) => useCallback(() => {
        setIsLoading(prev => {
            const arr = [...prev];
            arr[slideIndex] = true;
            return arr;
        });
    }, [isCurrentSlide]);

    function isLazy(i: number): boolean {
        if (getBrowserName() === BrowserName.SAFARI) { // отключить для safari
            return false;
        }
        return !isLoading[i];
    }

    return (
        <ModalWrapper className={s._}>
            <ModalHead theme={'blue'}>How to play</ModalHead>
            <div className={s.container}>

                <Swiper {...settings} className={s.slider}>
                    {slides.map((slide: HowToPlaySlide, i: number) => {
                        const isCurrentSlide: boolean = slideIndex === i;
                        return <SwiperSlide key={slide.headTitle} lazy={isLazy(i)}>
                            <Video
                                slide={slide}
                                isCurrentSlide={isCurrentSlide}
                                setIsLoadingEnded={setIsLoadingEnded(isCurrentSlide)}
                            />
                        </SwiperSlide>;
                    })}

                    {slideIndex !== slides.length - 1
                        ? <Button className={s.button} onClick={() => swiper?.slideNext()}>Next</Button>
                        : <Button className={s.button} onClick={closeModal}>Close</Button>
                    }
                </Swiper>
            </div>
        </ModalWrapper>
    );
}
