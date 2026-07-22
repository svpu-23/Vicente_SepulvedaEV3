import React, { useState } from 'react';

export default function MenuAcordeon() {
  const [seccionAbierta, setSeccionAbierta] = useState('cafes');

  const toggleSeccion = (seccion) => {
    setSeccionAbierta(seccionAbierta === seccion ? null : seccion);
  };

  return (
    <div className="accordion my-4" id="accordionCarta">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${seccionAbierta === 'cafes' ? '' : 'collapsed'} fw-bold`}
            type="button"
            onClick={() => toggleSeccion('cafes')}
          >
            ☕ Cafés Calientes & Fríos
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${seccionAbierta === 'cafes' ? 'show' : ''}`}>
          <div className="accordion-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Espresso Doble</strong>
                  <div className="small text-muted">Extracción intensa de granos seleccionados con notas frutales.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$2.400</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Iced Caramel Macchiato</strong>
                  <div className="small text-muted">Espresso con leche fría, hielo y un toque artesanal de caramelo.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$3.600</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Capuccino Vainilla</strong>
                  <div className="small text-muted">Espresso, leche vaporizada, abundante espuma y jarabe de vainilla.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$4.500</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Mocaccino Cacao Intenso</strong>
                  <div className="small text-muted">Mezcla perfecta de espresso, chocolate amargo fundido y leche vaporizada.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$4.200</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Frappé de Avellana</strong>
                  <div className="small text-muted">Café batido con hielo, crema batida y toque crocante de avellanas.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$4.800</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${seccionAbierta === 'pasteles' ? '' : 'collapsed'} fw-bold`}
            type="button"
            onClick={() => toggleSeccion('pasteles')}
          >
            🍰 Pastelería de la Casa
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${seccionAbierta === 'pasteles' ? 'show' : ''}`}>
          <div className="accordion-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Muffin de Arándanos</strong>
                  <div className="small text-muted">Suave panecillo esponjoso repleto de arándanos orgánicos.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$2.100</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Cheesecake de Frambuesa</strong>
                  <div className="small text-muted">Base crujiente de galleta con crema de queso y coulis de frambuesa.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$3.900</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Torta Amor de Manjar y Hojarasca</strong>
                  <div className="small text-muted">Capas finas de hojarasca artesanal, manjar casero y crema pastelera.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$4.100</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Brownie de Chocolate con Nuez</strong>
                  <div className="small text-muted">Húmedo pastel de cacao 70% acompañado de nueces picadas.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$2.800</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${seccionAbierta === 'sandwiches' ? '' : 'collapsed'} fw-bold`}
            type="button"
            onClick={() => toggleSeccion('sandwiches')}
          >
            🥪 Sándwiches & Salados
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${seccionAbierta === 'sandwiches' ? 'show' : ''}`}>
          <div className="accordion-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Croissant de Jamón Serrano y Queso Mantecoso</strong>
                  <div className="small text-muted">Masa hojaldrada horneada al momento con queso fundido.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$4.600</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Ave Palta Rústico</strong>
                  <div className="small text-muted">Pollo desmenuzado con palta hass molida en pan ciabatta de masa madre.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$4.900</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className={`accordion-button ${seccionAbierta === 'bebidas' ? '' : 'collapsed'} fw-bold`}
            type="button"
            onClick={() => toggleSeccion('bebidas')}
          >
            🥤 Bebidas & Infusiones
          </button>
        </h2>
        <div className={`accordion-collapse collapse ${seccionAbierta === 'bebidas' ? 'show' : ''}`}>
          <div className="accordion-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Jugo Natural de Naranja Zanahoria</strong>
                  <div className="small text-muted">100% fruta recién exprimida sin azúcar añadida.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$3.200</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>Té Matcha Latte Orgánico</strong>
                  <div className="small text-muted">Té verde ceremonial japonés con leche de almendras.</div>
                </div>
                <span className="badge bg-dark rounded-pill">$3.800</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}