import {screen} from "@testing-library/react";
import {renderWithProviders} from "app/store";
import {mockTournaments} from "entities/tournaments_card";
import {Tournaments} from "../";


describe('test Tournaments', () => {
    it('check render tournaments', () => {
        const {container} = renderWithProviders(<Tournaments tournaments={mockTournaments}/>);
        const slides = container.querySelectorAll('.swiper-slide');

        expect(screen.getByRole('heading', {name: 'TOURNAMENTS'})).toBeInTheDocument();
        expect(mockTournaments.length).toEqual(slides.length);
    });

    it('check render 0 tournaments', () => {
        renderWithProviders(<Tournaments tournaments={[]}/>);
        expect(screen.getByRole('heading', {name: /нет|отсутствуют/i})).toBeInTheDocument();
    });
});
