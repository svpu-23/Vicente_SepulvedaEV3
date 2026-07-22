import React, { useState, useEffect } from 'react';

const CATALOGO = {
  bebestibles: [
    { id: '1', nombre: 'Espresso Doble', precio: 2400 },
    { id: '2', nombre: 'Iced Caramel Macchiato', precio: 3600 },
    { id: '3', nombre: 'Capuccino Vainilla', precio: 4500 },
    { id: '4', nombre: 'Mocaccino Cacao Intenso', precio: 4200 },
    { id: '5', nombre: 'Frappé de Avellana', precio: 4800 }
  ],
  pasteleria: [
    { id: '6', nombre: 'Muffin de Arándanos', precio: 2100 },
    { id: '7', nombre: 'Cheesecake de Frambuesa', precio: 3900 },
    { id: '8', nombre: 'Torta Amor de Manjar y Hojarasca', precio: 4100 },
    { id: '9', nombre: 'Brownie de Chocolate con Nuez', precio: 2800 }
  ],
  salados: [
    { id: '10', nombre: 'Croissant Jamón Serrano y Queso', precio: 4600 },
    { id: '11', nombre: 'Ave Palta Rústico Ciabatta', precio: 4900 }
  ],
  infusiones: [
    { id: '12', nombre: 'Jugo Natural Naranja Zanahoria', precio: 3200 },
    { id: '13', nombre: 'Té Matcha Latte Orgánico', precio: 3800 }
  ],
  promociones: [
    { id: '14', nombre: 'Especial del Día: Latte Vainilla + Croissant', precio: 4990 }
  ]
};

export function PedidoForm({ datosIniciales, onSubmit }) {
  const [nombreCliente, setNombreCliente] = useState('');
  const [tipoEntrega, setTipoEntrega] = useState('para llevar');
  const [items, setItems] = useState([]);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('bebestibles');
  const [productoIdSeleccionado, setProductoIdSeleccionado] = useState(CATALOGO.bebestibles[0].id);
  const [cantidadInput, setCantidadInput] = useState(1);

  useEffect(() => {
    if (datosIniciales) {
      setNombreCliente(datosIniciales.cliente?.nombre || '');
      setTipoEntrega(datosIniciales.tipoEntrega || 'para llevar');
      setItems(datosIniciales.items || []);
    }
  }, [datosIniciales]);

  const handleCategoriaChange = (cat) => {
    setCategoriaSeleccionada(cat);
    setProductoIdSeleccionado(CATALOGO[cat][0].id);
  };

  const handleAgregarProducto = () => {
    const listaActual = CATALOGO[categoriaSeleccionada];
    const prod = listaActual.find((p) => p.id === productoIdSeleccionado);

    if (!prod) return;

    const nuevoItem = {
      productoId: prod.id,
      nombre: prod.nombre,
      precio: prod.precio,
      cantidad: Number(cantidadInput)
    };

    setItems([...items, nuevoItem]);
  };

  const handleAgregarEspecialDelDia = () => {
    const promo = CATALOGO.promociones[0];
    const nuevoItem = {
      productoId: promo.id,
      nombre: promo.nombre,
      precio: promo.precio,
      cantidad: 1
    };
    setItems([...items, nuevoItem]);
  };

  const handleEliminarItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const totalCalculado = items.reduce((acc, curr) => acc + curr.precio * curr.cantidad, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombreCliente.trim()) {
      alert('Ingresa el nombre del cliente');
      return;
    }
    if (items.length === 0) {
      alert('Debes agregar al menos un producto al pedido');
      return;
    }

    const payload = {
      cliente: { nombre: nombreCliente },
      tipoEntrega,
      items,
      total: totalCalculado,
      estado: datosIniciales?.estado || 'en_preparacion'
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm border">
      <div className="card border-warning mb-4 shadow-sm" style={{ backgroundColor: '#fffdf5' }}>
        <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div>
            <h5 className="card-title text-warning-emphasis fw-bold m-0">⭐ Promoción Exclusiva</h5>
            <p className="card-text m-0 fw-semibold text-dark">
              Especial del Día: Latte Vainilla + Croissant — <span className="text-success fw-bold">$4.990</span>
            </p>
          </div>
          <button
            type="button"
            className="btn btn-warning fw-bold text-dark"
            onClick={handleAgregarEspecialDelDia}
          >
            ⭐ ¡Añadir Especial al Pedido!
          </button>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Nombre del Cliente</label>
        <input
          type="text"
          className="form-control"
          placeholder="Ej: Benjamin Baeza"
          value={nombreCliente}
          onChange={(e) => setNombreCliente(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Tipo de Entrega</label>
        <select
          className="form-select"
          value={tipoEntrega}
          onChange={(e) => setTipoEntrega(e.target.value)}
        >
          <option value="para llevar">Para llevar</option>
          <option value="en local">En local</option>
        </select>
      </div>

      <hr />

      <h5 className="fw-bold mb-3">🛒 Seleccionar Productos</h5>

      <div className="row g-2 mb-3 align-items-end">
        <div className="col-md-3">
          <label className="form-label small fw-bold">1. Tipo</label>
          <select
            className="form-select"
            value={categoriaSeleccionada}
            onChange={(e) => handleCategoriaChange(e.target.value)}
          >
            <option value="bebestibles">☕ Cafés</option>
            <option value="pasteleria">🍰 Pastelería</option>
            <option value="salados">🥪 Sándwiches & Salados</option>
            <option value="infusiones">🥤 Bebidas & Infusiones</option>
            <option value="promociones">⭐ Promociones</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label small fw-bold">2. Producto</label>
          <select
            className="form-select"
            value={productoIdSeleccionado}
            onChange={(e) => setProductoIdSeleccionado(e.target.value)}
          >
            {CATALOGO[categoriaSeleccionada].map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre} (${p.precio})
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label small fw-bold">Cantidad</label>
          <input
            type="number"
            min="1"
            className="form-control"
            value={cantidadInput}
            onChange={(e) => setCantidadInput(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <button
            type="button"
            className="btn btn-outline-success w-100 fw-bold"
            onClick={handleAgregarProducto}
          >
            ➕ Añadir al Pedido
          </button>
        </div>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">Detalle del Pedido:</h6>
        {items.length === 0 ? (
          <p className="text-muted small">No has agregado productos aún.</p>
        ) : (
          <ul className="list-group">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{item.nombre}</strong> x{item.cantidad} — ${item.precio * item.cantidad}
                </div>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleEliminarItem(idx)}
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded">
        <span className="fs-5 fw-bold">Total a pagar:</span>
        <span className="fs-4 fw-bold text-success">${totalCalculado}</span>
      </div>

      <button type="submit" className="btn btn-primary w-100 fw-bold py-2">
        💾 Guardar Pedido
      </button>
    </form>
  );
}