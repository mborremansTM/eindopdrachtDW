import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import {useEffect, useState} from "react";
import {getGamesFromDb} from "../services/firestoreDatabase";






export function ChartDamage(props){
    const [gamesFromDb, setGamesFromDb] = useState([]);

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }

    gamesFromDb.sort((gl,gr)=>gl.id - gr.id)

    useEffect(()=> {
        loadGames();
    }, []);

    return <div className="chartBox">
        <button onClick={() => loadGames()}>Load games</button>
        <BarChart className='chart' margin-left="auto" margin-right="auto" width={550} height={200} data={gamesFromDb}>
            <XAxis dataKey="id"  label={{ value: 'Games', position: 'insideBottomRight', offset: 0 }} scale="band" />
            <YAxis label={{ value: 'Damage', angle: -90, position: 'insideLeft' }}/>
            <Tooltip/>
            <Bar dataKey="damage" barSize={30} fill="#3D405B"/>
        </BarChart>
    </div>




}

