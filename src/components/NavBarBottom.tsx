import './NavBarBottom.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBarBottom() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="bottom">
    <Container>
    <Navbar.Brand href="/">Digital Record</Navbar.Brand>
    </Container>
  </Navbar>
  );
}



export default NavBarBottom;
