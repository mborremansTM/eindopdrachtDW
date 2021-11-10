import firebase from "firebase/compat";
import React, {useState} from "react";
import {addUsersInDb} from "../services/firestoreDatabase";
import {Alert, Col, Container, Image, Row} from "react-bootstrap";
import {Section} from "./Section";

export function SignIn(props) {
    const [email, setEmail] = useState({})
    const [password, setPassword] = useState({})
    const [username, setUsername] = useState({})
    const [rank, setRank] = useState({})
    const [logIn, setLogin] = useState(true);
    const {setSignedIn} = props
    const [error, setError] = useState("")


    function SignUpUser() {
        firebase.auth().createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user;
            {
                !error && addUsers();
                SetLoginTrue();
                setError("")
            }
        })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setError("Email already in use")
                }
                if (error.code === "auth/invalid-email") {
                    setError("Email is invalid")
                }
                if (error.code === "auth/weak-password") {
                    setError("Password must be eigth characters in length.")
                }

            })

    }

    async function addUsers() {
        const user = {
            uid: firebase.auth().currentUser.uid,
            email: firebase.auth().currentUser.email,
            username: username,
            rank: rank
        }
        await addUsersInDb(user);
        console.log(`add ok for ${user}`);
    }


    function SignInUser() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setSignedIn(true)

            })
            .catch((error) => {
                if (error.code === "auth/invalid-email") {
                    setError("Invalid email")
                }
                if (error.code === "auth/wrong-password") {
                    setError("Wrong password")
                }
                if (error.code === "auth/user-not-found") {
                    setError("User not found")
                }
                else setError(error.code)
            })
    }

    function SetLoginFalse() {
        setLogin(false)

    }

    function SetLoginTrue() {
        setLogin(true)

    }

    if (logIn) {
        return <Container className="align-content-center">
            <div className="backgroundImage">
                <Image alt="Logo" className="image" src="https://logos-world.net/wp-content/uploads/2020/11/League-of-Legends-Logo-2009-2019.png"/>
            </div>
            <Row className="justify-content-md-center ">
                <Col lg={8}>
                    <Section>
                        <h3>Sign In</h3>
                        {error && <Alert variant={"danger"}>{error}</Alert>}
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" onChange={e => setEmail(e.target.value)} className="form-control"
                                   placeholder="Enter email"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" onChange={e => setPassword(e.target.value)} className="form-control"
                                   placeholder="Enter password"/>
                        </div>


                        <button onClick={SignInUser} className="btn btn-primary btn-block m-2">Sign In</button>
                        <p>Don't have an account? <a onClick={SetLoginFalse}><strong>Click here.</strong></a></p>
                    </Section>
                </Col>
            </Row>
        </Container>
    }
    if (!logIn) {
        return <Container>
            <Section>
                <h3>Sign Up</h3>
                {error && <Alert variant={"danger"}>{error}</Alert>}
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} className="form-control"
                           placeholder="Enter email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} className="form-control"
                           placeholder="Enter password"/>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={e => setUsername(e.target.value)} className="form-control"
                           placeholder="Enter username" noValidate/>
                </div>

                <div className="form-group">
                    <label>Rank</label>
                    <select onChange={e => setRank(e.target.value)} className="form-control">
                        <option value="" disabled selected>Enter your rank</option>
                        <option value="Iron">Iron</option>
                        <option value="Bronze">Bronze</option>
                        <option value="Silver">Silver</option>
                        <option value="Gold">Gold</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Master">Master</option>
                        <option value="Grandmaster">Grandmaster</option>
                        <option value="Challenger">Challenger</option>
                    </select>
                </div>

                <button onClick={SignUpUser} className="btn btn-primary btn-block m-2">Sign Up</button>
                <p>Already have an account? <a onClick={SetLoginTrue}><strong>Click here.</strong></a></p>
            </Section>
        </Container>
    }

}
