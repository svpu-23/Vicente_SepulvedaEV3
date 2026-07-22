import { useState } from 'react';
import { PedidoForm } from '../components/PedidoForm';
import { actualizarPedido } from '../services/cafeteriaApi';

export const EditarPedido = ({ pedidoSeleccionado, onFinalizar }) => {
  const [cargando, setCargando] = useState(false);

  const handleActualizar = async (datosFormulario) => {
    try {
      setCargando(true);
      
      const pedidoCompleto = {
        ...datosFormulario,
        estado: pedidoSeleccionado?.estado || 'en_preparacion'
      };

      await actualizarPedido(pedidoSeleccionado._id, pedidoCompleto);
      alert('¡Pedido actualizado con éxito!');
      if (onFinalizar) onFinalizar();
    } catch (error) {
      alert('Error al actualizar el pedido');
    } finally {
      setCargando(false);
    }
  };

  if (!pedidoSeleccionado) {
    return (
      <div className="container mt-4">
        <p>No se ha seleccionado ningún pedido para editar.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4 p-4 bg-white rounded shadow-sm">
      <h2 className="mb-4 text-warning">
        ✏️ Modificar Pedido de: <strong>{pedidoSeleccionado.cliente?.nombre || 'Cliente'}</strong>
      </h2>

      {cargando ? (
        <p>Actualizando datos...</p>
      ) : (
        <PedidoForm 
          datosIniciales={pedidoSeleccionado} 
          onSubmit={handleActualizar} 
        />
      )}
    </div>
  );
};