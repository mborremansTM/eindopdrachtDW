import {Section} from "./Section";
import {useState} from "react";
import {EditGame} from "./EditGame";
import {deleteGameInDb} from "../services/firestoreDatabase";


export function Game(props) {
    const [edit, setEdit] = useState(false)
    const [show, setShow] = useState(false)
    const {game} = props;

    return <div onClick={() => setShow(!show)}>
        <Section>

            {!edit && <div>

                <Color result={game.result}/>
                <strong>{game.champion}</strong> vs {game.enemy}
                {show && <div>
                    <button className="editButton" onClick={() => setEdit(!edit)}>{edit ? "Close" : "Edit"}</button>
                    <br/>
                    <strong>Damage dealt:</strong> {game.damage}
                    &emsp;
                    <strong>CS:</strong> {game.cs}
                    &emsp;
                    <strong>Kills:</strong> {game.kills}
                    &emsp;
                    <strong>Deaths:</strong> {game.deaths}
                    &emsp;
                    <strong>Assists:</strong> {game.assists}
                    &emsp;
                    <strong>KDA:</strong> <CountKDA kills={game.kills} deaths={game.deaths} assists={game.assists}/>
                    &emsp;
                    <strong>LP:</strong> {game.result === "WIN" ? "+" : "-"}{game.lp}
                </div>}
            </div>}
            {edit && <EditGame gameId={game.id} gameInDb={game} edit={edit} setEdit={setEdit}/>}
        </Section>
    </div>
}


export function Games(props) {
    const {games} = props;
    games.sort((gl, gr) => gr.id - gl.id)

    return <div>
        {games.slice(0, 10).map(g => <Game key={g.id} game={g}/>)}
    </div>;
}

function Color(props) {
    const {result} = props;

    if (result === "WIN") {
        return <h3 className="win">{result}</h3>

    }
    if (result === "LOSE") {
        return <h3 className="lose">{result}</h3>
    } else return null;
}

function CountKDA(props) {
    const {kills, deaths, assists} = props;
    let kda;
    if (deaths === 0) {
        kda = "Perfect KDA"
    } else {
        kda = afronden((kills + assists) / deaths);
    }
    return kda
}

export function afronden(getal) {
    return Math.round(getal * 10) / 10
}