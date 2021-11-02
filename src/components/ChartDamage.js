import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import {useEffect, useState} from "react";
import {getGamesFromDb} from "../services/firestoreDatabase";




export function ChartDamage(props){
    const [gamesFromDb, setGamesFromDb] = useState([]);

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }

    useEffect(()=> {
        loadGames();
    }, []);



    return <BarChart className='chart' width={550} height={200} data={gamesFromDb}>
            <XAxis dataKey="name"  label={{ value: 'Games', position: 'insideBottomRight', offset: 0 }} scale="band" />
            <YAxis label={{ value: 'Damage', angle: -90, position: 'insideLeft' }}/>
            <Tooltip/>
            <Bar dataKey="damage" barSize={30} fill="#3D405B"/>
        </BarChart>


}

