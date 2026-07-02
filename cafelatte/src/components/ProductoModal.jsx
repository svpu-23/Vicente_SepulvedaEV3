import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ProductoModal({ show, handleClose, producto }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton className="bg-dark text-light">
        <Modal.Title className="fw-bold text-warning">⭐ Promoción Exclusiva</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4" style={{ backgroundColor: '#fffdfa' }}>
        <h4 className="fw-bold mb-2 text-dark">{producto.title}</h4>
        <p className="text-muted">{producto.desc}</p>
        <hr />
        <div className="d-flex justify-content-between align-items-center pt-2">
          <span className="text-secondary fw-semibold fs-5">Precio de Oferta:</span>
          <span className="text-success fw-bold display-6">{producto.precio}</span>
        </div>
      </Modal.Body>
      <Modal.Footer className="bg-light">
        <Button variant="secondary" onClick={handleClose}>
          Cerrar ventana
        </Button>
        <Button variant="warning" className="fw-bold text-dark px-4" onClick={() => { alert('¡Añadido con éxito! Te esperamos en barra.'); handleClose(); }}>
          Añadir al Pedido
        </Button>
      </Modal.Footer>
    </Modal>
  );
}