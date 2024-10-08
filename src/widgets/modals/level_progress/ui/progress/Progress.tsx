import {select, useAppSelector} from "app/store";
import {useEffect, useRef, useState} from "react";
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import LevelProgressReward from "../tooltip_reward/LevelProgressReward";
import 'swiper/css';
import s from "./Progress.module.scss";


let initialSlide: number = 0;

function Progress() {
    const ref = useRef<SwiperRef>(null);
    const profileLevel: number = useAppSelector(select.profile._level);
    const profileLevelRewards: number[] = useAppSelector(select.profile._levelRewards);
    const {progressLevels} = useAppSelector(select.config._storeLevelConfig);
    const [levelRewards] = useState(profileLevelRewards);

    // profileLevel = 25;

    function slideToHandler(index: number) {
        setTimeout(() => {
            const swiperRef = ref.current;
            swiperRef?.swiper?.slideTo(index);
            initialSlide = index;
        }, 400);
    }

    useEffect(() => {
        if (profileLevel <= 2) {
            return slideToHandler(0);
        }
        if (profileLevel > 22) {
            return slideToHandler(progressLevels.length - 4);
        }
        return slideToHandler(profileLevel - 2);
    }, [profileLevel]);

    return (
        <div className={s._}>
            <Swiper
                ref={ref}
                className={s.slider}
                speed={1200}
                slidesPerView={4}
                initialSlide={initialSlide}
                grabCursor
            >
                {progressLevels.map((l) =>
                    <SwiperSlide key={l}>
                        <LevelProgressReward
                            level={l}
                            isActive={profileLevel >= l}
                            hasClaim={levelRewards.includes(l)}
                            isDone={!levelRewards.includes(l) && profileLevel >= l}
                            isCurrentLevel={profileLevel === l - 1}
                        />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default Progress;