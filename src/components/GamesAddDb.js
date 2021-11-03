import {Games} from "./Games";
import {useEffect, useState} from "react";

import {Section} from "./Section";
import {GamesForm} from "./GamesForm";
import {addGamesInDb} from "../services/firestoreDatabase";


export function GamesAddDb() {
    const [games, setGames] = useState([]);



    async function addGames() {
        await addGamesInDb( games);
        console.log(`add ok for ${games}`);
    }

    return <Section>
        <GamesForm games={games} setGames={setGames}/>
        <Games games={[games]}/>
        <button onClick={() => addGames(games)}>save as new</button>
    </Section>
}