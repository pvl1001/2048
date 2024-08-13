import {Tournament, TournamentsCard, useSliderSpaceBetween, useTournaments} from "entities/tournaments_card";
import {StartMatch} from "features/strat_match";
import {TutorialRoutes} from "features/tutorial";
import 'swiper/css/pagination';
import 'swiper/css/grid';
import {Grid, Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperProps, SwiperSlide} from "swiper/react";
import {SliderArrow} from "./SliderArrow";
import s from "./Tournaments.scss";


export function Tournaments() {
    const tournaments: Tournament[] = useTournaments();
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

    if (!tournaments?.length) {
        return null;
    }

    return (
        <section className={s._} id={'tutorial_tournaments'}>
            <h2 className={s.title}>TOURNAMENTS</h2>
            <div className={s.slider_container}>
                <SliderArrow className={s.swiper_prev}/>
                <SliderArrow className={s.swiper_next}/>

                <Swiper {...settings} className={s.slider}>
                    {tournaments.map((tournament: Tournament, index) =>
                        <SwiperSlide key={tournament.id}>
                            <TournamentsCard
                                index={index}
                                tournament={tournament}
                                action={<StartMatch/>}
                            />
                        </SwiperSlide>
                    )}
                </Swiper>

            </div>

            <TutorialRoutes/>
        </section>
    );
}
