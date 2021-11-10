import {getGamesFromDb} from "../services/firestoreDatabase";
import {useEffect, useState} from "react";

import {Games} from "./Games";
import {GamesAddDb} from "./GamesAddDb";

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
        <GamesAddDb setGamesFromDb={setGamesFromDb}/>
        <Games games={gamesFromDb}/>
    </div>;
}

