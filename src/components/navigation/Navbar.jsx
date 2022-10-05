import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My <img
              alt=""
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}Portfolio
            </Navbar.Brand>
          <Nav>            
            <Nav.Link href="https://www.linkedin.com/" target="_blank">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/szotaksimon/REACT-portfolio" target="_blank">GitHub</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainNavbar;