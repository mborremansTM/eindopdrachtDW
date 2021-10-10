import {Section} from "./Section";
import {Counters} from "./Counters";

export function Profile(props){
    const {profile} = props;

    return <Section>
        <strong>Username:</strong> {profile.nameUser}
        &emsp;
        <strong>League Points:</strong> {profile.lp} lp
        &emsp;
        <strong>Rank:</strong> {profile.rank}
        &emsp;
        <Counters/>
    </Section>
}