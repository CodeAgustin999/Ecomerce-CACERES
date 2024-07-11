import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/NavBar.css'
import { CartWidget } from "./CartWidget";


export const NavBar = () =>(
    
    <>
    
       
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Mundo Futbol</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Camisetas</Nav.Link>
            <Nav.Link href="#pricing">Botines</Nav.Link>
            <Nav.Link href="#pricing">Guantes</Nav.Link>
            <Nav.Link href="#pricing">Futbol</Nav.Link>
        </Nav>
        <CartWidget/>
        </Container>
        </Navbar>
        
       
    </>
)

    
