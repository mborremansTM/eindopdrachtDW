import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {PROFILE} from "./data/data";
import {Profile} from "./components/Profile";
import { Col, Container, Row} from "react-bootstrap";
import {Section} from "./components/Section";
import {ChartsTab} from "./components/ChartsTab";
import "./services/firestore";
import {GamesFromDb} from "./components/GamesFromDb";
import {GamesAddDb} from "./components/GamesAddDb";


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
                  <GamesFromDb/>
              </Col>
              <Col>
                  <GamesAddDb/>
                  <ChartsTab/>
              </Col>

          </Row>
      </Container>

  );
}

export default App;
