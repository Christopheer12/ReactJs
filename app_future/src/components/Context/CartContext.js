import { createContext, useContext, useState } from "react";

 const CartContext = createContext([]);
export const useCartContext =()=> useContext(CartContext)
export const CartContextProvider =({children})=>{
    const[cart, setCart]=useState([])
    const addToCart =(item)=>{
        setCart([
            ...cart,
            item])
    }
    const vaciarCarrito =()=>{
        setCart([])

    }
    return(
        <CartContext.Provider 
        value={{
            cart,
            addToCart,
            vaciarCarrito
        }}>
        {children}
        </CartContext.Provider>
    )
}