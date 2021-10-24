import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Games} from "./components/Games";
import {GAMES} from "./data/data";
import {PROFILE} from "./data/data";
import {Profile} from "./components/Profile";
import {Accordion, Col, Container, Row} from "react-bootstrap";

import {ChartDamage} from "./components/ChartDamage";
import {ChartCs} from "./components/ChartCs";
import {Section} from "./components/Section";

function App() {
  return (
      <Container>
        <h1>LEAGUE OF LEGENDS</h1>
          <Row>
              <Col>
                  <Profile profile={PROFILE}/>
              </Col>
          </Row>
          <Row>
              <Col xs={6}>
                  <Games games={GAMES}/>
              </Col>
              <Col>
                  <Section>
                      <Accordion>
                          <ChartDamage/>
                          <ChartCs/>
                      </Accordion>
                  </Section>
              </Col>


          </Row>
      </Container>

  );
}

export default App;
