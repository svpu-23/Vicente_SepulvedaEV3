import React from 'react';
import { Accordion, ListGroup, Badge } from 'react-bootstrap';

export default function MenuAcordeon() {
  return (
    <section id="menu" className="my-5 pt-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">Nuestra Carta</h2>
        <p className="text-muted">Selecciona una categoría para desplegar nuestras delicias.</p>
      </div>
      
      <Accordion defaultActiveKey="0" className="shadow-sm">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className="fw-bold text-dark">☕ Cafés Calientes & Fríos</span>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
                <div>
                  <div className="fw-bold">Espresso Doble</div>
                  <small className="text-muted">Extracción intensa de granos seleccionados con notas frutales.</small>
                </div>
                <Badge bg="dark" pill className="fs-6">$2.400</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
                <div>
                  <div className="fw-bold">Iced Caramel Macchiato</div>
                  <small className="text-muted">Espresso con leche fría, hielo y un toque artesanal de caramelo.</small>
                </div>
                <Badge bg="dark" pill className="fs-6">$3.600</Badge>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className="fw-bold text-dark">🍰 Pastelería de la Casa</span>
          </Accordion.Header>
          <Accordion.Body>
            <ListGroup variant="flush">
              <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
                <div>
                  <div className="fw-bold">Muffin de Arándanos</div>
                  <small className="text-muted">Suave panecillo esponjoso repleto de arándanos orgánicos.</small>
                </div>
                <Badge bg="dark" pill className="fs-6">$2.100</Badge>
              </ListGroup.Item>
              <ListGroup.Item className="d-flex justify-content-between align-items-center py-3">
                <div>
                  <div className="fw-bold">Cheesecake de Frambuesa</div>
                  <small className="text-muted">Base crujiente de galleta con crema de queso y coulis de frambuesa.</small>
                </div>
                <Badge bg="dark" pill className="fs-6">$3.900</Badge>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}