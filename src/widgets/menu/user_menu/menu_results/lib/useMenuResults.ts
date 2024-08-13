import {useEffect} from "react";
import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetMatchResults, TournamentGroup} from "entities/result_card";


function useMenuResults(): TournamentGroup[] {
    const dispatch = useAppDispatch();
    const tournamentGroups: TournamentGroup[] = useAppSelector(select.playersResults._tournamentsGroups);

    useEffect(() => {
        dispatch(thunkGetMatchResults());
    }, []);

    return tournamentGroups;
}

export default useMenuResults;