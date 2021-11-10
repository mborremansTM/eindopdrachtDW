import React, { useState} from "react";
import {updateUserInDb} from "../services/firestoreDatabase";
import {Alert} from "react-bootstrap";

export function EditProfile(props){
    const [userToDb, setToFromDb] = useState([]);
    const {setShowProfile} = props;
    const {userFromDb} = props;
    const [error, setError] = useState("")


    async function update(){
        await updateUserInDb(userToDb).catch((error)=>{
            setError("test")
        })
        console.log(`update ok for ${userToDb}`);


    }

    return <div>
            {error && <Alert variant={"danger"}>{error}</Alert>}
            <input type="text" placeholder={userFromDb.username} onChange={e => setToFromDb({...userToDb, username: e.target.value})}/>
        <select onChange={e => setToFromDb({...userToDb, rank: e.target.value})}>
            <option value="" disabled selected>Enter your rank</option>
            <option value="Iron">Iron</option>
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
            <option value="Master">Master</option>
            <option value="Grandmaster">Grandmaster</option>
            <option value="Challenger">Challenger</option>
        </select>
            <button onClick={()=> {update(); setShowProfile(true)}}>update</button>

    </div>
}