import {Tournament, TournamentsCard, useSliderSpaceBetween} from "entities/tournaments_card";
import {StartMatch} from "features/strat_match";
import 'swiper/css/pagination';
import 'swiper/css/grid';
import React from "react";
import {Grid, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import {SliderArrow} from "./SliderArrow";
import s from "./Tournaments.module.scss";


type Props = {
    tournaments: Tournament[]
    tutorialRoutes?: JSX.Element
}

export function Tournaments({tournaments, tutorialRoutes}: Props) {
    const pageRem: number = useSliderSpaceBetween(40);

    const settings: SwiperProps = {
        modules: [Pagination, Grid, Navigation],
        pagination: {clickable: true},
        grabCursor: true,
        speed: 500,
        slidesPerView: 2,
        grid: {rows: 2},
        spaceBetween: pageRem,
        navigation: {
            prevEl: `.${s.swiper_prev}`,
            nextEl: `.${s.swiper_next}`,
        }
    };

    return (
        <section className={s._} id={'tutorial_tournaments'}>
            {!tournaments.length
                ? <h2 className={s.title}>Нет доступных турниров</h2>
                : <>
                    <h2 className={s.title}>TOURNAMENTS</h2>
                    <div className={s.slider_container}>
                        <SliderArrow className={s.swiper_prev}/>
                        <SliderArrow className={s.swiper_next}/>

                        <Swiper {...settings} className={s.slider}>
                            {tournaments.map((tournament: Tournament, index) =>
                                <SwiperSlide key={tournament.id}>
                                    <TournamentsCard
                                        isTutorial={index === 0}
                                        currency={tournament.rewards[0].currency}
                                        durationTime={tournament.durationTime}
                                        entryFee={tournament.entryFee}
                                        numberOfParticipants={tournament.numberOfParticipants}
                                        action={<StartMatch id={tournament.id}/>}
                                    />
                                </SwiperSlide>
                            )}
                        </Swiper>

                    </div>
                    {tutorialRoutes}
                </>
            }
        </section>
    );
}
