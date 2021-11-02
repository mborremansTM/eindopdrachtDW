import {Col, Nav, Row, Tab} from "react-bootstrap";
import {ChartDamage} from "./ChartDamage";
import {GAMES} from "../data/data";
import {ChartCs} from "./ChartCs";


export function ChartsTab(){


    return <Tab.Container /*defaultActiveKey="damage"*/>
            <Row>
                <Nav>
                    <Nav.Item className='navItem'>
                        <Nav.Link className='navLink' eventKey="damage">Damage chart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='navItem'>
                        <Nav.Link className='navLink'eventKey="cs">Cs chart</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Row>
            <Row>
                <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="damage">
                            <ChartDamage data={GAMES}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="cs">
                            <ChartCs data={GAMES}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>

    </Tab.Container>
}