import {BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';
import {Accordion} from "react-bootstrap";


export function ChartCs(props) {
    const data = [
        {
            id: '1',
            cs: 103,
        },
        {
            id: '2',
            cs: 78,
        }
    ];

    return <Accordion.Item eventKey="0">
        <Accordion.Header>Cs chart</Accordion.Header>
        <Accordion.Body>
            <div id="example-collapse-text">
                <BarChart width={400} height={200} data={data}>
                    <XAxis dataKey="id" label={{value: 'Games', position: 'insideBottomRight', offset: 0}}
                           scale="band"/>
                    <YAxis label={{value: 'Cs', angle: -90, position: 'insideLeft'}}/>
                    <Tooltip/>
                    <Bar dataKey="cs" barSize={30} fill="#3D405B"/>
                </BarChart>
            </div>
        </Accordion.Body>
    </Accordion.Item>

}

