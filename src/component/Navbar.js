import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BiSolidPhoneCall} from 'react-icons/bi'
function Navigation() {

  return (
    <>
    <Navbar  collapseOnSelect expand="lg" className="" fixed="top" >
      <Container >
         <Navbar.Brand href="#home">
            <img
            src='/home/logo.png'
              width="120"
              height="70"
              className="d-inline-block align-top"
              alt="Thangapalam logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#front" className='navtext'>Home</Nav.Link>
            <Nav.Link  href='#aboutus' className='navtext'>About US  </Nav.Link>
            <Nav.Link href="#explore" className='navtext'>Explore</Nav.Link>
            {/* <Nav.Link href="#deets" className='navtext'>FAQ</Nav.Link> */}
            <Nav.Link href="#contact" className="icon-call">
              <a href="tel:1800789123"><BiSolidPhoneCall/>+91 9488692030</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navigation;