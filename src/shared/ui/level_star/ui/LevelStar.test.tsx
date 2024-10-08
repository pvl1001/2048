import {render, screen} from "@testing-library/react";
import {LevelStar} from "shared/ui/level_star";


describe('test LevelStar', () => {
    it('check render level', () => {
        render(<LevelStar level={22}/>);
        expect(screen.getByText('22')).toBeInTheDocument();
    });
});

