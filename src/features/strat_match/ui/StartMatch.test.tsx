import {screen} from "@testing-library/react";
import {userEvent} from "@testing-library/user-event";
import {renderWithProviders} from "app/store";
import {StartMatch} from "features/strat_match";
import {vi} from 'vitest';


describe('test StartMatch', () => {
    it('should be alert about start game', async () => {
        vi.spyOn(window, 'alert');
        renderWithProviders(<StartMatch id={'test'}/>);
        await userEvent.click(screen.getByRole('button'));
        expect(window.alert).toHaveBeenCalledWith("play game test");
    });
});
