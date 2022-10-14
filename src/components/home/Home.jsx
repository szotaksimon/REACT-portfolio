import { Link } from "react-router-dom"
import Card from "../cards/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "../../styles/home/home.module.scss"


function Home() {
  return (
    <>
      <Row className={classes.row}>
        <Col>
        <Link to="/test">
          <Card />
        </Link>
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
    </>
  );
}

export default Home;
