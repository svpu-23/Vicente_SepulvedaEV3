import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function NavbarCafe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} onToggle={(nextExpand) => setExpanded(nextExpand)} expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#hero" className="fw-bold text-warning">
          ☕ CaféLatte
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#hero" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link href="#menu" onClick={() => setExpanded(false)}>Menú</Nav.Link>
            <Nav.Link href="#eventos" onClick={() => setExpanded(false)}>Eventos</Nav.Link>
            <Nav.Link href="#newsletter" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
            <Button variant="outline-warning" className="ms-lg-3 mt-2 mt-lg-0" onClick={() => alert('¡Redireccionando a reserva!')}>
              Reservar Mesa
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}