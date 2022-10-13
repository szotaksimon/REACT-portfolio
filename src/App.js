import MainNavbar from "./components/navigation/Navbar"
import Card from "./components/cards/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import classes from "./styles/app/app.module.scss"

import Test from "./components/projects/Test"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <MainNavbar />
      <Container className={classes.container}>
        <Routes>
          <Route path="/test" element={<Test />} />
        </Routes>
        
        
        {/* <Row className={classes.row}>
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
        </Row> */}
      </Container>
    </>
  );
}

export default App;
