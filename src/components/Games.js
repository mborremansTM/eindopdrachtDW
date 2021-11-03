import {Section} from "./Section";

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
    </Section>
}

export function Games(props) {
    const {games} = props;

    return <div>
        {games.slice(games.length-10,games.length).map(g => <Game key={g.id} game={g}/>)}
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


    function afronden(getal) {
        return Math.round(getal * 10) / 10
    }

    return kda
}