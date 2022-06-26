import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    const addToCart = (item) => {
        if (IsInCart(item.id)) {
            alert('ya se agrego anteriormente')
        } else {
            setCart([...cart,  item ]);
            alert('agreegado')
        }
 
    };

const EliminarItem =(id)=>{
    const items = cart.filter((product)=> product.id !==id)
    setCart(items)
    alert('eliminado')
    
}   

    const vaciarCarrito = () => {
        setCart([])
    }

    const IsInCart = (id) => cart.some((i) => i.id === id);


    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart, 
                vaciarCarrito,
                EliminarItem,
               
            }}>
            {children}
        </CartContext.Provider>
    )
}