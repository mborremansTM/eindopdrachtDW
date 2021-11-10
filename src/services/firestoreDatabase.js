import "firebase/firestore";
import {firestoreDatabase} from "./firestore";
import firebase from "firebase/compat";
const COLLECTION_USERS = "users";


export async function getGamesFromDb() {

    const uid = firebase.auth().currentUser.uid;

    const collection = "users/"+uid+"/games"

    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(collection).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}

export async function getUserFromDb() {
    const uid = firebase.auth().currentUser.uid;

    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(COLLECTION_USERS).doc(''+uid+'').get();
    if (result.empty) return [];
    if (!result.exists) {
        console.log('No such document!');
    } else {
        console.log('Document data:', result.data().username);
    }
    return result.data();
}


export async function addGamesInDb(games) {
    const uid = firebase.auth().currentUser.uid;


    const collection = "users/"+uid+"/games"

    const result = (await firestoreDatabase.collection(collection).get()).size+1;
    if (!firestoreDatabase) return;

    const newGamesDoc = await firestoreDatabase.collection(collection).doc(''+result+'').set(games);
    return {...games, id: result};
}

export async function addUsersInDb(users) {
    if (!firestoreDatabase) return;

    const newUsersDoc = await firestoreDatabase.collection(COLLECTION_USERS).doc(''+users.uid+'').set(users);
    return {...users, id: users.uid};
}

export async function updateUserInDb(user) {
    const uid = firebase.auth().currentUser.uid;
    if (!firestoreDatabase) return;

    const doc = firestoreDatabase.collection(COLLECTION_USERS).doc(uid);
    await doc.update(user);
}

export async function updateGameInDb(game, gameId) {

    const gameT=gameId
    const uid = firebase.auth().currentUser.uid;
    const collection = "users/"+uid+"/games"

    if (!firestoreDatabase) return;

    const doc = firestoreDatabase.collection(collection).doc(''+gameT+'');
    await doc.update(game);
}