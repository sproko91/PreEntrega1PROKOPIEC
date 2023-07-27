import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
  return (
<Navbar expand="lg" bg="light" data-bs-theme="light">
      <Container>
        <h1 href="#home">WILLOW</h1>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1">
            <Nav.Link className="enlace">Velas</Nav.Link>
            <Nav.Link className="enlace">Difusores</Nav.Link>
            <Nav.Link className="enlace">Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="navCart"><CartWidget/></Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;