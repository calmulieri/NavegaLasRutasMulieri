import { createContext, useContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

// Hook para acceder al contexto fácilmente
export const useCart = () => useContext(CartContext);

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProducto = (producto, cantidad) => {
    const productoExistente = carrito.find((p) => p.id === producto.id);

    if (productoExistente) {
      // Si ya existe, actualizar cantidad
      const nuevoCarrito = carrito.map((p) =>
        p.id === producto.id ? { ...p, cantidad: p.cantidad + cantidad } : p
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad }]);
    }
  };

  // ✅ NUEVO: Eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter((p) => p.id !== id));
  };

  const cantidadTotal = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  const vaciarCarrito = () => setCarrito([]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarProducto,
        cantidadTotal,
        vaciarCarrito,
        eliminarProducto, // ✅ Agregado acá
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
