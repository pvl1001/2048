import {render, screen} from "@testing-library/react";
import {mockTournaments} from "../lib/mockTournaments";
import {TournamentsCard} from "./TournamentsCard";


const [tournament] = mockTournaments;
const props = {
    isTutorial: false,
    currency: tournament.rewards[0].currency,
    durationTime: tournament.durationTime,
    entryFee: tournament.entryFee,
    numberOfParticipants: tournament.numberOfParticipants,
    action: <></>,
};

describe('test TournamentsCard', () => {
    it('check render durationTime', () => {
        const {unmount} = render(<TournamentsCard {...props} durationTime={669852800}/>);
        expect(screen.getByText(/\d{2}:\d{2}:\d{2}/)).toBeInTheDocument();

        unmount();

        render(<TournamentsCard {...props} />);
        expect(screen.queryByText(/..:..:../)).not.toBeInTheDocument();
    });

    it('check render bonus flag', () => {
        const {unmount} = render(<TournamentsCard {...props} currency={{...props.currency, ID_BONUS_CURRENCY: 100}}/>);
        expect(screen.getByAltText('bonus')).toBeInTheDocument();

        unmount();

        render(<TournamentsCard {...props} currency={{...props.currency, ID_BONUS_CURRENCY: 0}}/>);
        expect(screen.queryByAltText('bonus')).not.toBeInTheDocument();
    });

});
