import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Hero({ onOpenModal }) {
  const productoDestacado = {
    title: "Especial del Día: Latte Vainilla + Croissant",
    desc: "Disfruta de nuestro café de especialidad con granos seleccionados con notas de chocolate, finamente texturizado con leche evaporada y jarabe de vainilla, acompañado de un croissant artesanal horneado esta mañana.",
    precio: "$4.990"
  };

  return (
    <div 
      id="hero"
      className="bg-dark text-light p-5 text-center text-md-start" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1920")', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center' 
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="py-4">
            <span className="text-warning fw-bold text-uppercase tracking-wider">Café de Especialidad & Repostería</span>
            <h1 className="display-4 fw-bold my-3">El rincón perfecto para tus sentidos</h1>
            <p className="lead mb-4">Descubre granos traídos de las mejores fincas del mundo y bollería fina preparada con ingredientes 100% artesanales.</p>
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
              <Button variant="warning" size="lg" className="fw-bold px-4 text-dark" onClick={() => onOpenModal(productoDestacado)}>
                Ver Especial del Día 🌟
              </Button>
              <Button variant="outline-light" size="lg" className="px-4" href="#menu">
                Explorar la Carta
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}