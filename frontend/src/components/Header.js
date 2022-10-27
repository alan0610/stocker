import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from "react-router-dom";


function Header() {
    return (
    <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>STOCKER</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/aboutUs"}>Nosotros</Nav.Link>
            <NavDropdown title="Productos" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/products"}>Pantalones</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Remeras</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Bermudas</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Invierno</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Ropa interior</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Sweaters</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Chalecos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/products"}>Cinturones</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/register"}>Registro</Nav.Link>
            <Nav.Link as={Link} to={"/cart"}><FontAwesomeIcon icon={solid('cart-shopping')} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Header