import { useState } from 'react';
import { PedidoForm } from '../components/PedidoForm';
import { crearPedido } from '../services/cafeteriaApi';

export const AgregarPedido = () => {
  const [cargando, setCargando] = useState(false);

  const handleCrear = async (datosPedido) => {
    try {
      setCargando(true);
      await crearPedido(datosPedido);
      alert('¡Pedido registrado con éxito en CaféLatte!');
    } catch (error) {
      alert('Error al guardar el pedido');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary">☕ Registrar Nuevo Pedido</h2>
      {cargando ? <p>Enviando datos...</p> : <PedidoForm onSubmit={handleCrear} />}
    </div>
  );
};