import { useCartContext } from '../Context/CartContext'
const CartWidget =()=>{
    const { cantidadTotal } = useCartContext()
    return(
        <div> 
        <div><a class="nav-link" href="#">Tienes {cantidadTotal()} articulos en tu <i class="fa-solid fa-cart-shopping"></i></a></div>
       
        </div>
        )
        
}
export default CartWidget