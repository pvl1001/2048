import {select, useAppDispatch, useAppSelector} from "app/store";
import {thunkGetMatchResults, TournamentGroup} from "entities/result_card";
import {useEffect} from "react";


function useMenuResults(): TournamentGroup[] {
    let dispatch = useAppDispatch();
    let tournamentGroups: TournamentGroup[] = useAppSelector(select.playersResults._tournamentsGroups);

    useEffect(() => {
        dispatch(thunkGetMatchResults());
    }, []);

    return tournamentGroups;
}

export default useMenuResults;