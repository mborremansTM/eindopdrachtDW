import {useEffect, useState} from "react";
import {getGamesFromDb} from "../services/firestoreDatabase";

export function GamesForm(props) {
    const {games, setGames} = props;

    const [gamesFromDb, setGamesFromDb] = useState([]);
    const length = gamesFromDb.length+1

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }
    useEffect(()=> {
        loadGames();
    }, []);

    return <div>
        champion: <input onChange={e => setGames({...games, champion: e.target.value})}/>
        <br/>
        enemy: <input onChange={e => setGames({...games, enemy: e.target.value})}/>
        <br/>
        kills: <input type="number" onChange={e => setGames({...games, kills: parseInt(e.target.value)})}/>
        <br/>
        deaths: <input type="number" onChange={e => setGames({...games, deaths: parseInt(e.target.value)})}/>
        <br/>
        assists: <input type="number" onChange={e => setGames({...games, assists: parseInt(e.target.value)})}/>
        <br/>
        cs: <input type="number" onChange={e => setGames({...games, cs: parseInt(e.target.value)})}/>
        <br/>
        damage: <input type="number" onChange={e => setGames({...games, damage: parseInt(e.target.value)})}/>
        <br/>
        result: <input onChange={e => setGames({...games, result: e.target.value.toUpperCase()})}/>
    </div>
}