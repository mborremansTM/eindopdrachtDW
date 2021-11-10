import {afronden} from "./Games";

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
    return <div>
        <strong>{win} wins</strong>
        &emsp;
        <strong>{lose} lose</strong>
        &emsp;
        <strong>{winrate}% winrate</strong>
    </div>
}