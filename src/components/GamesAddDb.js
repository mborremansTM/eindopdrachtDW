import {Games} from "./Games";
import {useEffect, useState} from "react";

import {Section} from "./Section";
import {GamesForm} from "./GamesForm";
import {addGamesInDb, getGamesFromDb} from "../services/firestoreDatabase";
import {SectionNewGame} from "./SectionNewGame";


export function GamesAddDb() {
    const [games, setGames] = useState([]);


    async function addGames() {
        await addGamesInDb(games);
        console.log(`add ok for ${games}`);
    }

    return <SectionNewGame>
            <GamesForm games={games} setGames={setGames}/>
            <button onClick={() => addGames(games)}>save as new</button>
    </SectionNewGame>
}