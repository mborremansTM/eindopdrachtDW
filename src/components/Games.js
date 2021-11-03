import {Section} from "./Section";
import {forEach} from "react-bootstrap/ElementChildren";
import {loadGames} from "./GamesFromDb";

export function Game(props) {
    const {game} = props;
    return <Section>
        <Color result={game.result}/>
        <strong>{game.champion}</strong> vs {game.enemy}
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
        <strong>Time played:</strong> {game.time}
        &emsp;
        <strong>LP:</strong> {game.result ==="WIN" ? "+" : "-"}{game.lp}
    </Section>
}

export function Games(props) {
    const {games} = props;
    games.sort((gl,gr)=>gr.id - gl.id)

    return <div>
        <Winrate games={games}/>
        {games.slice(0,10).map(g => <Game key={g.id} game={g}/>)}
    </div>;
}

function Color(props) {
    const {result} = props;

    if (result === "WIN") {
        return <h3 className="win">{result}</h3>

    }
    if (result === "LOSE") {
        return <h3 className="lose">{result}</h3>
    }
    else return null;
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

export function Winrate(props){
    const {games} = props;
    let win = 0;
    let lose = 0;

    games.map(game => {
        if (game.result === "WIN"){
            win++;
        }
        if (game.result === "LOSE"){
            lose++;
        }
    })

    let winrate = afronden(win/games.length*100);
    return <Section>
        <p>{win} wins</p>
        <p>{lose} lose</p>
        <p>{winrate} winrate</p>

    </Section>
}

function afronden(getal) {
    return Math.round(getal * 10) / 10
}