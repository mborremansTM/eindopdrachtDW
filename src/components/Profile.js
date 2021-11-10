export function Profile(props){
    const {profile} = props;


    return <div>
        <strong>Username:</strong> <span>{profile.username}</span>
        &emsp;
        <strong>Rank:</strong> <span>{profile.rank}</span>
        &emsp;
    </div>
}
