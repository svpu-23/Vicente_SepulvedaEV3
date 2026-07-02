import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [validated, setValidated] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      setValidated(false);
      
      localStorage.setItem('correoSuscrito', email);
      
      setSuccess(true);
      setEmail(''); 
    }
  };

  return (
    <section id="newsletter" className="bg-light py-5 border-top border-bottom">
      <Container style={{ maxWidth: '600px' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">Únete al Club CaféLatte ✉️</h3>
          <p className="text-muted">Sé el primero en enterarte de nuestras catas de café exclusivas y recibe un 15% de descuento en tu primer paquete de granos.</p>
        </div>

        {success && (
          <Alert variant="success" onClose={() => setSuccess(false)} dismissible className="fw-medium">
            ¡Excelente! Te has suscrito correctamente. Revisa tu correo para tu código de descuento.
          </Alert>
        )}

        <Form noValidate validated={validated} onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row gap-2">
          <Form.Group className="flex-grow-1" controlId="validationEmail">
            <Form.Control 
              required 
              type="email" 
              placeholder="Tu correo electrónico (ej: nombre@correo.com)" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, introduce un correo electrónico válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" variant="dark" className="px-4 fw-bold align-self-start align-self-sm-stretch">
            Suscribirme
          </Button>
        </Form>
      </Container>
    </section>
  );
}