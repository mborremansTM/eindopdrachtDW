import {useState} from "react";
import {GamesForm} from "./GamesForm";
import {addGamesInDb, getGamesFromDb} from "../services/firestoreDatabase";

import {Section} from "./Section";
import {Alert} from "react-bootstrap";


export function GamesAddDb(props) {
    const [games, setGames] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isValid, setIsValid] = useState(false)
    const {setGamesFromDb} = props;


    function reset(){
        setGames({})
    }


    async function addGames() {
        await addGamesInDb(games);
        console.log(`add ok for ${games}`);
    }

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }

    return <Section>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? "Close" : "New game"} </button>
        <button onClick={loadGames}>Load games</button>
        {isOpen && <div>
            <GamesForm games={games} setGames={setGames} setIsValid={setIsValid}/>
            {isValid && <button onClick={() => {
                addGames(games); setIsOpen(false); setIsValid(false); reset();
            }}>Save as new</button>
            }
            {!isValid && <Alert className="mt-2" variant={"danger"}>Make sure all fields are field in</Alert>}
        </div>}
    </Section>
}
