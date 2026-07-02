import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

export default function EventosGaleria() {
  const items = [
    { type: 'Instalación', title: 'Salón de Tueste', img: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600', text: 'Un espacio tranquilo con wifi de alta velocidad, ideal para estudiar o trabajar disfrutando del mejor aroma.' },
    { type: 'Evento', title: 'Cata de Café Filtrado', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600', text: 'Todos los viernes por la tarde, nuestro barista experto te guiará en un viaje por diferentes notas de sabor.' },
    { type: 'Instalación', title: 'Nuestra Terraza', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600', text: 'Disfruta al aire libre en un ambiente cómodo, moderno y 100% pet-friendly.' }
  ];

  return (
    <section id="eventos" className="my-5 pt-4">
      <h2 className="text-center fw-bold mb-2">Experiencia CaféLatte</h2>
      <p className="text-center text-muted mb-4">Conoce nuestras instalaciones y actividades programadas.</p>
      

      <Row className="g-4 row-cols-1 row-cols-md-3">
        {items.map((item, index) => (
          <Col key={index}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <Card.Img variant="top" src={item.img} style={{ height: '220px', objectFit: 'cover' }} />
              <Card.Body>
                <span className="badge bg-warning text-dark mb-2 fw-bold">{item.type}</span>
                <Card.Title className="fw-bold text-dark">{item.title}</Card.Title>
                <Card.Text className="text-muted small">{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}