/*
import {addUsersInDb} from "../services/firestoreDatabase";
import firebase from "firebase/compat";
import {Section} from "./Section";


export function UserAddDb() {
    const user = {
        uid: firebase.auth().currentUser.uid,
        email: firebase.auth().currentUser.email
    }

    async function addUsers() {
        await addUsersInDb(user);
        console.log(`add ok for ${user}`);
    }

    return <Section>
        <button onClick={() => addUsers(user)}>save as new</button>
    </Section>
}*/
