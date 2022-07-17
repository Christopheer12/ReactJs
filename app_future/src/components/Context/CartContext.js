import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [info,setInfo]=useState({})

  const addToCart = (item) => {
    if (cart.find((producto) => producto.id === item.id)) {
      setCart(
        cart.map((producto) => {
          if (producto.id === item.id) {
            producto.cantidad += item.cantidad;
          }
          return producto;
        })
      );
    } else {
      setCart([...cart, item]);
    }
  };
  const EliminarItem = (id) => {
    const items = cart.filter((product) => product.id !== id);
    setCart(items);
    swal("eliminado");
  };

  const vaciarCarrito = () => {
    setCart([]);
    alert("se borro todo lo del carrito");
  };

  const precioTotal = () => {
    return cart.reduce((acum, i) => acum + i.cantidad * i.precio, 0);
  };
  const cantidadTotal = () => {
    return cart.reduce((acum, i) => acum + i.cantidad, 0);
  };
const addInformation = (infoobj)=>{
  setInfo(infoobj)
}
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        vaciarCarrito,
        EliminarItem,
        precioTotal,
        cantidadTotal,
        
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
