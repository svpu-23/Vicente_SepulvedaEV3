import { useState } from 'react';
import { eliminarPedido } from '../services/cafeteriaApi';

export const EliminarPedido = ({ pedido, onFinalizar }) => {
  const [cargando, setCargando] = useState(false);

  const handleEliminar = async () => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este pedido de la cafetería?')) {
      try {
        setCargando(true);
        await eliminarPedido(pedido._id);
        alert('Pedido eliminado correctamente');
        if (onFinalizar) onFinalizar();
      } catch (error) {
        alert('Error al intentar eliminar el pedido');
      } finally {
        setCargando(false);
      }
    }
  };

  if (!pedido) {
    return <div className="container mt-4"><p>Selecciona un pedido para eliminar.</p></div>;
  }

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <h3 className="text-danger">⚠️ Confirmar Eliminación</h3>
      <p>Vas a eliminar el pedido a nombre de: <strong>{pedido.cliente?.nombre}</strong></p>
      <p>Total del pedido: <strong>${pedido.total}</strong></p>
      <button className="btn btn-danger me-2" onClick={handleEliminar} disabled={cargando}>
        {cargando ? 'Eliminando...' : 'Sí, Eliminar Pedido'}
      </button>
      {onFinalizar && (
        <button className="btn btn-secondary" onClick={onFinalizar}>
          Cancelar
        </button>
      )}
    </div>
  );
};