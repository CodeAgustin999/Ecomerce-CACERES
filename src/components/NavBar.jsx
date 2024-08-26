import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../components/NavBar.css";
import { CartWidget } from "./CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <>
    <Navbar bg="primary" data-bs-theme="dark" className="navegacion">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Mundo Futbol
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/camisetas">
            Camisetas
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/botines">
            Botines
          </Nav.Link>
          <Nav.Link as={NavLink} to="/category/guantes">
            Guantes
          </Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  </>
);
