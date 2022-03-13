import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <>
        <Navbar bg="danger" className="navbar fixed-top" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="fs-3 fw-bold">
              SwiftCharge
            </Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link className="fs-5 fw-bold" href="#home">
                Contact
              </Nav.Link>
              <Nav.Link className="fs-5 fw-bold" href="#features">
                About
              </Nav.Link>
              <Nav.Link className="fs-5 fw-bold" href="#pricing">
                Sign In
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
