import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./styles/NavBarPortfolio.css";

function NavBarPortfolio() {
  return (
    <Navbar
      className="navBarPortfolio"
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
    >
      <Navbar.Brand href="#home">AGS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Skills</Nav.Link>
          <Nav.Link href="#home">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarPortfolio;
