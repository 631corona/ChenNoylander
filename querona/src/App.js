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
            <h1>ענבר מזרחי השליטע נלחמת בקורונה</h1>
            <Container>
                <Row id="demonstrations">
                    <Col xs={6}>
                        <Image src={purimImg} roundedCircle/>
                    </Col>
                    <Col xs={6}>
                        <Image src={checkImg} roundedCircle/>
                    </Col>
                </Row>
            </Container>
            <header className="App-header">
                <img src={queronaLogo} className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default App;
