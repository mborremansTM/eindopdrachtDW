
import React, {useState} from "react";
import {deleteGameInDb, updateGameInDb} from "../services/firestoreDatabase";
import {Alert} from "react-bootstrap";



export function EditGame(props){
    const [game, setGame] = useState([]);
    const [isValid, setIsValid] = useState([false])
    const {gameId}= props;
    const {edit, setEdit} = props;
    const {gameInDb} = props;





    async function update(){
        await updateGameInDb(game, gameId);
        console.log(`update ok for ${game}`);
        setEdit(false)
    }




    return <div>
        <button className="editButton" onClick={() => setEdit(!edit)}>{edit ? "Close" : "Edit"}</button>
        <form>
            Champion: <input name="champion" onChange={e => setGame({...game, champion: e.target.value})}
                             className="form-control" placeholder={gameInDb.champion} required/>
            <br/>
            Enemy champion: <input onChange={e => setGame({...game, enemy: e.target.value})} className="form-control"
                                   placeholder={gameInDb.enemy}/>
            <br/>
            Kills: <input type="number" min="0" onChange={e => setGame({...game, kills: parseInt(e.target.value)})}
                          className="form-control" placeholder={gameInDb.kills}/>
            <br/>
            Deaths: <input type="number" min="0" onChange={e => setGame({...game, deaths: parseInt(e.target.value)})}
                           className="form-control" placeholder={gameInDb.deaths}/>
            <br/>
            Assists: <input type="number" min="0" onChange={e => setGame({...game, assists: parseInt(e.target.value)})}
                            className="form-control" placeholder={gameInDb.assists}/>
            <br/>
            Cs: <input type="number" min="0" onChange={e => setGame({...game, cs: parseInt(e.target.value)})}
                       className="form-control" placeholder={gameInDb.cs}/>
            <br/>
            Damage: <input type="number" min="0" onChange={e => setGame({...game, damage: parseInt(e.target.value)})}
                           className="form-control" placeholder={gameInDb.damage}/>
            <br/>
            Game result: <select onChange={e => setGame({...game, result: e.target.value})}
                                 className="form-control" placeholder={gameInDb.result}>
            <option value="" disabled selected>Select your option</option>
            <option value="WIN">Win</option>
            <option value="LOSE">Lose</option>
        </select>
            <br/>
            Lp: <input type="number" min="0" onChange={e => setGame({...game, lp: parseInt(e.target.value)})}
                       className="form-control" placeholder={gameInDb.lp}/>
        </form>
        {isValid && <button onClick={update}>update</button>}
        {!isValid && <Alert className="mt-2" variant={"danger"}>Make sure all fields are field in</Alert>}
        </div>
}