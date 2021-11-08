import firebase from "firebase/compat";
import React, {useState} from "react";
import {addUsersInDb} from "../services/firestoreDatabase";


export function SignUp(props){
    const [email,setEmail]=useState({})
    const [password, setPassword]=useState({})
    const {setSignedIn} = props
    let {setEmail1} = props



    function SignUpUser(){
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setEmail1(email)
            addUsers()
            // ...
        })

    }

    async function addUsers() {
        const user = {
            uid: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email
        }
        await addUsersInDb(user);
        console.log(`add ok for ${user}`);
    }


    function SignInUser(){
        firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            setEmail1(user.uid)
            setSignedIn(true)
            // ...
        })

    }

    return <div>
        <input type="email" onChange={e => setEmail( e.target.value)}/>
        <input type="password" onChange={e => setPassword( e.target.value)}/>
        <button onClick={SignUpUser}>Sign up</button>
        <button onClick={SignInUser}>Sign in</button>
    </div>
}
