import {Section} from "./Section";

export function Game(props) {
    const {game} = props;

    if (game.result){
        return <Section>
            <Color result={game.result}/>
            <strong>Your champion picked:</strong> {game.champion}
            &emsp;
            <strong>Enemy champion picked:</strong> {game.enemy}
            &emsp;
            <strong>Damage dealt:</strong> {game.damage}
            &emsp;
            <strong>CS:</strong> {game.cs}
            &emsp;
            <strong>Kills:</strong> {game.kills}
            &emsp;
            <strong>Assists:</strong> {game.assist}
            &emsp;
            <strong>Deaths:</strong> {game.death}
            &emsp;
            <strong>KDA:</strong> <CountKDA kills={game.kills} deaths={game.death} assists={game.assist}/>
        </Section>
    }
    else return null


}

export function Games(props) {
    const {games} = props;

    return <div>
        {games.map(g => <Game key={g.id} game={g}/>)}
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
}

function CountKDA(props) {
    const {kills, deaths, assists} = props;
    let kda = kills + assists / deaths;

    function afronden(getal){
        return Math.round(getal*10)/10
    }

    return afronden(kda)
}