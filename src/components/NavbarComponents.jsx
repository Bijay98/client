import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import skype from '../skype.svg';

const NavbarComponent=()=>{
    return(
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
              alt=""
              src={skype}
              width="30"
              height="30"
              className="d-inline-block align-top color-light"
            />{' '}
            Social-Connect
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">About-us</Nav.Link>
              <Nav.Link href="#pricing">Contact-us</Nav.Link>
             
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Sign up</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Log in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default NavbarComponent;