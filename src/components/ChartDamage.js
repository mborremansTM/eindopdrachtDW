import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import {Accordion} from "react-bootstrap";



export function ChartDamage(props){
    const data = [
        {
            id: '1',
            damage: 10512,
        },
        {
            id: '2',
            damage: 2500,
        }
    ];

    return <Accordion.Item eventKey="1">
        <Accordion.Header>Damage chart</Accordion.Header>
        <Accordion.Body>
            <div id="example-collapse-text">
                <BarChart width={400} height={200} data={data}>
                    <XAxis dataKey="id"  label={{ value: 'Games', position: 'insideBottomRight', offset: 0 }} scale="band" />
                    <YAxis label={{ value: 'Damage', angle: -90, position: 'insideLeft' }}/>
                    <Tooltip/>
                    <Bar dataKey="damage" barSize={30} fill="#3D405B"/>
                </BarChart>
            </div>
        </Accordion.Body>
    </Accordion.Item>

}

