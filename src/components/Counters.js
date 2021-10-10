import React, {useState} from "react";

export function Counters(props){
    const [dodgeCounter, setDodgeCounter] = useState(0);

    return <div>
        <strong>dodges:</strong> {dodgeCounter}
        &emsp;
        <button onClick={() => setDodgeCounter(dodgeCounter-1)}>-</button>
        &ensp;
        <button onClick={() => setDodgeCounter(dodgeCounter+1)}>+</button>
    </div>
}