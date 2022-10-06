import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import classes from '../../styles/navbar/navbar.module.scss'

function MainNavbar() {
  return (
      <Navbar bg="dark" variant="dark" className={classes.navbar}>
        <Container>
          <Navbar.Brand href="#home" className={classes.brand}>My <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className={classes.title}
            />{' '}Portfolio
            </Navbar.Brand>
          <Nav>            
            <Nav.Link className={classes.link} href="https://www.linkedin.com/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link className={classes.link} href="https://github.com/szotaksimon/REACT-portfolio" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainNavbar;