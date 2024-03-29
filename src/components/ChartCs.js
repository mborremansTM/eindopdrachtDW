import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import {useEffect, useState} from "react";
import {getGamesFromDb} from "../services/firestoreDatabase";



export function ChartCs(props) {
    const [gamesFromDb, setGamesFromDb] = useState([]);

    async function loadGames() {
        const games = await getGamesFromDb();
        setGamesFromDb(games);
    }

    useEffect(()=> {
        loadGames();
    }, []);

    gamesFromDb.sort((gl,gr)=>gl.id - gr.id)


    return <div className="chartBox">
        <button onClick={() => loadGames()}>Load games</button>
        <BarChart width={550} height={200} data={gamesFromDb}>
            <XAxis dataKey="id" label={{value: 'Games', position: 'insideBottomRight', offset: 0}}
                   scale="band"/>
            <YAxis label={{value: 'Cs', angle: -90, position: 'insideLeft'}}/>
            <Tooltip/>
            <Bar dataKey="cs" barSize={30} fill="#3D405B"/>
        </BarChart>
    </div>

}

