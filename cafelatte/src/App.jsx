import React, { useState } from 'react';
import NavbarCafe from './components/NavbarCafe';
import Hero from './components/Hero';
import MenuAcordeon from './components/MenuAcordeon';
import ProductoModal from './components/ProductoModal';
import EventosGaleria from './components/EventosGaleria';
import Newsletter from './components/Newsletter';
import FooterCafe from './components/FooterCafe';

import { VerPedidos } from './pages/VerPedido';
import { AgregarPedido } from './pages/AgregarPedido';
import { EditarPedido } from './pages/EditarPedido';
import { EliminarPedido } from './pages/EliminarPedido';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [vistaActual, setVistaActual] = useState('ver');
  const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);

  const handleOpenModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  const handleIrAEditar = (pedido) => {
    setPedidoSeleccionado(pedido);
    setVistaActual('editar');
  };

  const handleIrAEliminar = (pedido) => {
    setPedidoSeleccionado(pedido);
    setVistaActual('eliminar');
  };

  const handleFinalizarAccion = () => {
    setPedidoSeleccionado(null);
    setVistaActual('ver');
  };

  return (
    <div className="min-vh-100" style={{ backgroundColor: '#eaeded' }}>
      <NavbarCafe />

      {/* Identificador para la sección Inicio */}
      <section id="hero">
        <Hero onOpenModal={handleOpenModal} />
      </section>

      <div className="container mt-4">
        <div className="card shadow-sm p-3 mb-4 bg-white rounded">
          <div className="d-flex justify-content-center gap-2">
            <button
              className={`btn ${vistaActual === 'ver' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setVistaActual('ver')}
            >
              📋 Ver Lista de Pedidos
            </button>
            <button
              className={`btn ${vistaActual === 'agregar' ? 'btn-success' : 'btn-outline-success'}`}
              onClick={() => setVistaActual('agregar')}
            >
              ➕ Nuevo Pedido
            </button>
          </div>
        </div>

        {vistaActual === 'ver' && (
          <VerPedidos onEditar={handleIrAEditar} onEliminar={handleIrAEliminar} />
        )}

        {vistaActual === 'agregar' && (
          <AgregarPedido />
        )}

        {vistaActual === 'editar' && (
          <EditarPedido
            pedidoSeleccionado={pedidoSeleccionado}
            onFinalizar={handleFinalizarAccion}
          />
        )}

        {vistaActual === 'eliminar' && (
          <EliminarPedido
            pedido={pedidoSeleccionado}
            onFinalizar={handleFinalizarAccion}
          />
        )}
      </div>

      <main className="container my-5">
        {/* Identificador para la sección del Menú */}
        <section id="menu" className="mb-5 pt-3">
          <h2 className="text-center fw-bold mb-4">Nuestra Carta</h2>
          <MenuAcordeon />
        </section>

        {/* Identificador para la sección de Eventos */}
        <section id="eventos">
          <EventosGaleria />
        </section>
      </main>

      {/* Identificador para la sección de Contacto */}
      <section id="newsletter">
        <Newsletter />
      </section>

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