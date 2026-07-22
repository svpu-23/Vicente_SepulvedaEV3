import { useState, useEffect } from 'react';
import { getPedidos } from '../services/cafeteriaApi';

export const VerPedidos = ({ onEditar, onEliminar }) => {
  const [pedidos, setPedidos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarDatos = async () => {
    try {
      setCargando(true);
      const datos = await getPedidos();
      setPedidos(datos || []);
    } catch (error) {
      alert('Error al conectar con la API de la cafetería');
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos();
  }, []);

  const renderBadgeEstado = (estado) => {
    switch (estado) {
      case 'en_preparacion':
        return <span className="badge bg-info text-dark px-3 py-2">en preparación</span>;
      case 'listo':
        return <span className="badge bg-warning text-dark px-3 py-2">listo</span>;
      case 'entregado':
        return <span className="badge bg-success px-3 py-2">entregado</span>;
      case 'cancelado':
        return <span className="badge bg-danger px-3 py-2">cancelado</span>;
      default:
        const textoLimpio = estado ? estado.replace(/_/g, ' ') : 'pendiente';
        return <span className="badge bg-secondary px-3 py-2">{textoLimpio}</span>;
    }
  };

  if (cargando) return <div className="container mt-4"><p>Cargando lista de pedidos...</p></div>;

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">📋 Pedidos Registrados</h2>
        <button className="btn btn-outline-primary btn-sm" onClick={cargarDatos}>Recargar</button>
      </div>

      <div className="table-responsive shadow-sm rounded">
        <table className="table table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>Cliente</th>
              <th>Entrega</th>
              <th>Productos</th>
              <th>Total</th>
              <th>Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p._id}>
                <td className="fw-bold">{p.cliente?.nombre || 'Sin nombre'}</td>
                <td>{p.tipoEntrega}</td>
                <td>
                  <small className="text-muted">
                    {p.items?.map((i) => `${i.nombre} (x${i.cantidad})`).join(', ') || 'Sin ítems'}
                  </small>
                </td>
                <td className="fw-bold">${p.total}</td>
                <td>{renderBadgeEstado(p.estado)}</td>
                <td className="text-center">
                  <button 
                    className="btn btn-sm btn-warning text-white me-2 fw-bold" 
                    onClick={() => onEditar(p)}
                  >
                    Editar
                  </button>
                  <button 
                    className="btn btn-sm btn-danger fw-bold" 
                    onClick={() => onEliminar(p)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};