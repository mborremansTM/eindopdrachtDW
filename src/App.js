import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Col, Container, Image, Row} from "react-bootstrap";
import {ChartsTab} from "./components/ChartsTab";
import "./services/firestore";
import {GamesFromDb} from "./components/GamesFromDb";
import {SignIn} from "./components/SignIn";
import React, {useState} from "react";
import firebase from "firebase/compat";
import {ProfileFromDb} from "./components/ProfileFromDb";




function App() {
    const [signedIn, setSignedIn] = useState(false)

    if (!signedIn) return <SignIn setSignedIn={setSignedIn}/>;

    function Logout(){
        firebase.auth().signOut()
        setSignedIn(false)
    }

  return (
      <div className="test2">
      <Container>
          <div className="backgroundImage">
              <Image alt="Logo" className="image" src="https://logos-world.net/wp-content/uploads/2020/11/League-of-Legends-Logo-2009-2019.png"/>
          </div>
          <button className="logOut" onClick={Logout}>log out</button>
          <Row>
              <Col>
                  <ProfileFromDb/>
              </Col>
          </Row>
          <Row>

              <Col lg={6}>
                  <GamesFromDb/>
              </Col>
              <Col lg={6}>

                  <ChartsTab/>
              </Col>

          </Row>
      </Container>
      </div>

  );
}

export default App;
