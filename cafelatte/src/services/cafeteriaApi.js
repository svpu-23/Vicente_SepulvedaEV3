const API_URL = "https://apiclases.inacode.cl/cafeteria";

export const crearPedido = async (datosPedido) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosPedido),
    });

    if (!response.ok) {
      throw new Error("Error al crear el pedido");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const actualizarPedido = async (id, datosActualizados) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });

    if (!response.ok) {
      throw new Error("Error al actualizar el pedido");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPedidos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener la lista de pedidos");
    }
    const data = await response.json();
    return data.datos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const eliminarPedido = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error al eliminar el pedido");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};