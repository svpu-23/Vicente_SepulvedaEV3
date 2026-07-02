import React from 'react';
import { Container } from 'react-bootstrap';

export default function FooterCafe() {
  return (
    <footer className="py-4 text-center mt-auto" style={{ backgroundColor: '#2f3e22' }}>
      <Container>
        <p className="mb-1 fw-bold text-warning">☕ CaféLatte S.A.</p>
        <p className="small text-white mb-3">📍 Av. Vicuña Mackenna, Santiago | 📞 +56 9 1234 5678</p>
        <hr className="border-secondary" />
        <p className="small text-white mb-0">
          &copy; {new Date().getFullYear()} CaféLatte. Proyecto FrontEnd - INACAP Sede Renca.
        </p>
      </Container>
    </footer>
  );
}