import {useEffect, useState} from "react";
import {getGamesFromDb, getUserFromDb} from "../services/firestoreDatabase";
import {Profile} from "./Profile";
import {Section} from "./Section";
import {Winrate} from "./Winrate";
import {EditProfile} from "./EditProfile";

export function ProfileFromDb(props){
    const [userFromDb, setUserFromDb] = useState([]);
    const [showProfile, setShowProfile] = useState(true);

    async function loadUser() {
        const user = await getUserFromDb();
        setUserFromDb(user);
    }


    useEffect(()=> {
        loadUser();
    }, []);

    const [gamesFromDb, setGamesFromDb] = useState([]);

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }

    useEffect(()=> {
        loadGames();
    }, []);


    return <Section>
        {showProfile && <Profile profile={userFromDb}/>}
        {!showProfile && <EditProfile setShowProfile={setShowProfile} userFromDb={userFromDb}/>}
        <Winrate games={gamesFromDb}/>
        <button className="justify-content-md-center" onClick={() => {loadUser(); setShowProfile(true); loadGames()}}>Load user</button>
        <button className="justify-content-md-center mt-2" onClick={() => setShowProfile(false)}>Edit user</button>
    </Section>;
}