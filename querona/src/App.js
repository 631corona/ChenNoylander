import React from 'react';
import MouseRain from './confetti.js';
import {Navbar, Container, Row, Col, Image, Card, OverlayTrigger, Button, Tooltip} from 'react-bootstrap';
import MapChart from "./MapChart.js";
import ReactTooltip from "react-tooltip";
import queronaText from './queronaText.svg';
import queronaLogo from './queronaLogo.svg';
import purimImg from './purim.jfif';
import checkImg from './check.jfif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function zoomTooltip(props) {
    return (
        <Tooltip id="zoomTooltip" {...props}>
            ניתן להתקרב ולהתרחק במפה באמצעות שתי אצבעות על משטח המגע.
        </Tooltip>
    );
}

function App() {
    const [mapContent, mapSetContent] = React.useState("");
    return (
        <div className="App">
            <MouseRain/>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img src={queronaLogo} className="d-inline-block" id="logo" alt="logo"/>
                    <img src={queronaText} className="d-inline-block" id="text" alt="querona"/>
                </Navbar.Brand>
            </Navbar>
            <h1>ענבר מזרחי השליטע נלחמת בקורונה</h1>
            <Container>
                <Card bg="dark" border="dark">
                    <Card.Header>
                        <OverlayTrigger
                            placement="right"
                            delay={{ show: 250, hide: 400 }}
                            overlay={zoomTooltip}
                        >
                            <Button id="zoomTooltipButton" variant="success">!</Button>
                        </OverlayTrigger>
                        בחרו מדינה לקבלת סטטיסטיקות עליה:
                    </Card.Header>
                    <Card.Body>
                        <Container id="mapContainer">
                            <MapChart setTooltipContent={mapSetContent} />
                            <ReactTooltip>{mapContent}</ReactTooltip>
                        </Container>
                    </Card.Body>
                </Card>
            </Container>
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
            {/*<header className="App-header">
                <img src={queronaLogo} className="App-logo" alt="logo"/>
            </header>*/}
        </div>
    );
}

export default App;