import { createContext, useContext, useState } from "react";
import swal from "sweetalert";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addToCart = (item) => {
        if (IsInCart(item.id)) {
            (cart.find(product =>product.id === item.id)).cantidad+= item.cantidad
            swal('ya se agrego anteriormente')
            
        } else {
            setCart([...cart,  item ]);
            swal('agreegado')
        }
 
    }
const EliminarItem =(id)=>{
    const items = cart.filter((product)=> product.id !==id)
    setCart(items)
    swal('eliminado')
    
}   
    const IsInCart = (id) => cart.some((i) => i.id === id);


    const vaciarCarrito = () => {
        setCart([])
        swal('a vaciado el carrito')
    }

    const precioTotal =()=>{
        return cart.reduce((acum,i)=> acum + i.cantidad * i.precio, 0)
    }


    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart, 
                vaciarCarrito,
                EliminarItem,
                precioTotal,
               
            }}>
            {children}
        </CartContext.Provider>
    )
}