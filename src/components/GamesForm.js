import React, {useEffect, useState} from "react";
import {getGamesFromDb} from "../services/firestoreDatabase";


export function GamesForm(props) {
    const {games, setGames} = props;
    const {setIsValid} = props;

    async function loadGames() {

        await getGamesFromDb();
    }


    useEffect(() => {
        loadGames();
    }, []);

    if (games.champion && games.enemy && games.kills && games.deaths && games.assists && games.cs && games.damage && games.result && games.lp){
        setIsValid(true)
    }





    return <div>
        <form>
            Champion: <input id="champion" onChange={e => setGames({...games, champion: e.target.value})}
                             className="form-control" placeholder="Enter your champion"/>
            <br/>
            Enemy champion: <input onChange={e => setGames({...games, enemy: e.target.value})} className="form-control"
                                   placeholder="Enter your enemy champion"/>
            <br/>
            Kills: <input type="number" onChange={e => setGames({...games, kills: parseInt(e.target.value)})}
                          className="form-control" placeholder="0"/>
            <br/>
            Deaths: <input type="number" onChange={e => setGames({...games, deaths: parseInt(e.target.value)})}
                           className="form-control" placeholder="0"/>
            <br/>
            Assists: <input type="number" onChange={e => setGames({...games, assists: parseInt(e.target.value)})}
                            className="form-control" placeholder="0"/>
            <br/>
            Cs: <input type="number" onChange={e => setGames({...games, cs: parseInt(e.target.value)})}
                       className="form-control" placeholder="0"/>
            <br/>
            Damage: <input type="number" onChange={e => setGames({...games, damage: parseInt(e.target.value)})}
                           className="form-control" placeholder="0"/>
            <br/>
            Game result: <select onChange={e => setGames({...games, result: e.target.value})}
                                 className="form-control">
            <option value="" disabled selected>Select your option</option>
            <option value="WIN">Win</option>
            <option value="LOSE">Lose</option>
        </select>
            <br/>
            Lp: <input type="number" onChange={e => setGames({...games, lp: parseInt(e.target.value)})}
                           className="form-control" min="0" placeholder="0"/>

        </form>
    </div>
}