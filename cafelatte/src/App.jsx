import React, { useState } from 'react';
import NavbarCafe from './components/NavbarCafe';
import Hero from './components/Hero';
import MenuAcordeon from './components/MenuAcordeon';
import ProductoModal from './components/ProductoModal';
import EventosGaleria from './components/EventosGaleria';
import Newsletter from './components/Newsletter';
import FooterCafe from './components/FooterCafe';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#eaeded' }}>
      <NavbarCafe />
      <Hero onOpenModal={handleOpenModal} />
      
      <main className="container my-5">
        <MenuAcordeon />
        <EventosGaleria />
      </main>

      <Newsletter />
      <FooterCafe />

      {selectedProduct && (
        <ProductoModal 
          show={showModal} 
          handleClose={() => setShowModal(false)} 
          producto={selectedProduct} 
        />
      )}
    </div>
  );
}