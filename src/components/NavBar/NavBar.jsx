import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "../../styles/navbar.css";


const NavBar = () => {

  return (
<Navbar expand="lg">
      <div className="navBar">
        <Link to={`/`}>
          <h1 href="#home" className="navTitulo">WILLOW</h1>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end flex-grow-1 ">
            <Link to={`/category/Velas`} className="enlace border-end border-dark">Velas</Link>
            <Link to={`/category/Difusores`}className="enlace border-end border-dark">Difusores</Link>
            <Link to={`/contactanos`} className="enlace">Contactanos</Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="navCart"><CartWidget/></Nav.Link>
      </div>
    </Navbar>
  );
};

export default NavBar;