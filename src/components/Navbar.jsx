import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/Navbar.css"; // Custom CSS for premium styling

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="premium-navbar">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="#home" className="brand-name">
          Rohit<span className="highlight">Flow</span>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Navbar Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>

            {/* Dropdown Example (Optional) */}
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#resume">Resume</NavDropdown.Item>
              <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#hire">Hire Me 🚀</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
