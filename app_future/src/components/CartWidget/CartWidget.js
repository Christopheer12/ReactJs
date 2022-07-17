import { useCartContext } from '../Context/CartContext'
const CartWidget =()=>{
    const { cantidadTotal } = useCartContext()
    return(
        <div> 
        <div><p>Tienes {cantidadTotal()} articulos en tu <i className="fa-solid fa-cart-shopping"></i></p></div>
       
        </div>
        )
        
}
export default CartWidget