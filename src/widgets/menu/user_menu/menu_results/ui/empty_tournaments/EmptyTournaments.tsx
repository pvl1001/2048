import cubeImg from 'shared/assets/icons/sad_cube.png';
import s from "./EmptyTournaments.scss";


function EmptyTournaments() {
    return (
        <div className={s._}>
            <img src={cubeImg} alt="sad cube"/>
            <p>No tournament has been played yet</p>
        </div>
    );
}

export default EmptyTournaments;