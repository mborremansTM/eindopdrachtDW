import {Game} from "./Games";

export function Damage(props) {
    const {damage} = props;

    return damage ;
}

export function Damages(props){
    const {damages} =props;

    return <div>
        {damages.map(d => <Damage key={d.id} damage={d}/>)}
    </div>

}