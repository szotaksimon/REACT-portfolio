import MainNavbar from "./components/navigation/Navbar";
import Card from "./components/cards/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import classes from "./styles/app/app.module.scss";

function App() {
  return (
    <>
      <MainNavbar />
      <Container className={classes.container}>
        <Row className={classes.row}>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
        <Row className={classes.row}>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
        <Row className={classes.row}>
          <Col>
            <Card />
          </Col>
          <Col>
            <Card />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
