import './NavBarTop.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
// import iconAccount from '../assets/icons/account.png' 


function NavBarTop() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" sticky="top">
    <Container>
      <Navbar.Brand href="/">Digital Record</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#features">Concepts</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#contracts">Contracts</Nav.Link>
        <Nav.Link href="#sdks">SDKs</Nav.Link>
        <Nav.Link href="#apis">APIs</Nav.Link> 
      </Nav>
      <Nav>
        <Nav.Link href="#whitepaper">Whitepaper</Nav.Link>
        <Nav.Link href="#github">Github</Nav.Link>
        <Nav.Link href="#grants">Grants</Nav.Link>
        <Nav.Link href="/login">Login/Register    
       
          <Image src='' roundedCircle />

        </Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}



export default NavBarTop;
