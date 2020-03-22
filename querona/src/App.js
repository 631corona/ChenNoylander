import React from 'react';
import {Navbar, Container, Row, Col, Image} from 'react-bootstrap';
import queronaText from './queronaText.svg';
import queronaLogo from './queronaLogo.svg';
import purimImg from './purim.jfif';
import checkImg from './check.jfif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={queronaLogo} className="d-inline-block" id="logo" alt="logo"/>
                    <img src={queronaText} className="d-inline-block" id="text" alt="querona"/>
                </Navbar.Brand>
            </Navbar>
            <Container>
                <Row id="demonstrations">
                    <Col xs={6} md={4}>
                        <Image src={purimImg} roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src={checkImg} roundedCircle />
                    </Col>
                </Row>
            </Container>
            <header className="App-header">
                <img src={queronaLogo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
