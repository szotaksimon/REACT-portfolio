import MainNavbar from "./components/navigation/Navbar"

import Container from "react-bootstrap/Container"
import classes from "./styles/app/app.module.scss"

import Test from "./components/projects/Test"
import Home from "./components/home/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <MainNavbar />
      <Container className={classes.container}>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
