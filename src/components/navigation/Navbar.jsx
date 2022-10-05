import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNavbar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
          <Nav>            
            <Nav.Link href="#features">Linkedin</Nav.Link>
            <Nav.Link href="#pricing">Github</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default MainNavbar;