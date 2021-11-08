import "firebase/firestore";
import {firestoreDatabase} from "./firestore";
const COLLECTION_GAMES = "games";
const COLLECTION_USERS = "users";

export async function getGamesFromDb() {
    if (!firestoreDatabase) return [];
    const result = await firestoreDatabase.collection(COLLECTION_GAMES).get();
    if (result.empty) return [];
    return result.docs.map(doc => ({...doc.data(), id: doc.id}));
}




export async function addGamesInDb(games) {
    const result = (await firestoreDatabase.collection(COLLECTION_GAMES).get()).size+1;
    if (!firestoreDatabase) return;

    const newGamesDoc = await firestoreDatabase.collection(COLLECTION_GAMES).doc(''+result+'').set(games);
    return {...games, id: result};
}

export async function addUsersInDb(users) {
    if (!firestoreDatabase) return;

    const newUsersDoc = await firestoreDatabase.collection(COLLECTION_USERS).doc(''+users.uid+'').set(users);
    return {...users, id: users.uid};
}