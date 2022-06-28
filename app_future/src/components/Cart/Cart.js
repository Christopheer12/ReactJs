import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

const Cart = () => {
  const{cart, vaciarCarrito,EliminarItem,precioTotal} = useCartContext()
  return (
    <div>
      <div>{cart.length<1?<p>Carrito vacio</p>:<p>Tu articulos:</p>}</div>
      <ul>
        {cart.map(item =><li key={item.id}>
          <div className='w-25'>
            <img src={item.foto} className='w-25'/>
            
          </div>
          
          {item.nombre}
         <p> ${item.precio} por unidad</p>
          {item.estado} 
          
          Cantidad agregada {item.cantidad } 
          <button onClick={()=>EliminarItem(item.id) }>Eliminar</button>
          </li>)}
      </ul>
      <div>
        <button onClick={vaciarCarrito}> Vaciar carrito</button>
      </div>
      
      <Link to='/'>
            <button onClick={()=>console.log('ir al inicio')}>seguir comprando</button>
            </Link>
            <p>el precio total del carrito es : ${precioTotal()}</p>
    </div>
  )
}
export default Cart;