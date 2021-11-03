import {getGamesFromDb} from "../services/firestoreDatabase";
import {useEffect, useState} from "react";
import {Games} from "./Games";

export function GamesFromDb(){
    const [gamesFromDb, setGamesFromDb] = useState([]);

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }

    useEffect(()=> {
        loadGames();
    }, []);

    return <div>
        <button onClick={() => loadGames()}>Load games</button>
        <Games games={gamesFromDb}/>
    </div>;
}

