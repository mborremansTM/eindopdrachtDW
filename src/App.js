import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {PROFILE} from "./data/data";
import {Profile} from "./components/Profile";
import { Col, Container, Row} from "react-bootstrap";
import {ChartsTab} from "./components/ChartsTab";
import "./services/firestore";
import {GamesFromDb} from "./components/GamesFromDb";
import {GamesAddDb} from "./components/GamesAddDb";
import {SignUp} from "./components/SignUp";
import React, {useState} from "react";
import firebase from "firebase/compat";
import {UserAddDb} from "./components/UserAddDb";


function App() {
    const [signedIn, setSignedIn] = useState(false)
    const [email1, setEmail1] = useState({})

    if (!signedIn) return <SignUp setSignedIn={setSignedIn} setEmail1={setEmail1}/>;

    function Logout(){
        firebase.auth().signOut()
        setSignedIn(false)
    }

  return (
      <Container>
        <h1>LEAGUE OF LEGENDS</h1>
          <h1>{email1}</h1>
          <button onClick={Logout}>log out</button>
          <Row>
              <Col>
                  <Profile profile={PROFILE}/>

              </Col>
          </Row>
          <Row>
              <Col xs={6}>
                  <GamesFromDb/>
              </Col>
              <Col xs={6}>
                  <GamesAddDb/>
                  <ChartsTab/>
              </Col>

          </Row>
          <UserAddDb/>
      </Container>

  );
}

export default App;
