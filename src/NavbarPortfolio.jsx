import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarPortfolio() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" style={{ height: 70, position: 'fixed', zIndex: 1 }}>
      <Container style={{ backgroud: "white" }}>
        <Navbar.Brand href="#home">AGS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Skills</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPortfolio;