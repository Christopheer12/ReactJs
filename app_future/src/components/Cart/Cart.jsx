import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

const Cart = (product) => {
  const{cart, vaciarCarrito,EliminarItem} = useCartContext()
  const{id} = product;
  return (
    <div>
      <div>{cart.length<1?<p>Carrito vacio</p>:<p>Tu articulos:</p>}</div>
      <ul>
        {cart.map(item =><li key={item.id}>
          <div className='w-25'>
            <img src={item.foto} className='w-25'/>
            
          </div>
          
          {item.nombre}
          {item.precio}
          {item.estado} 
          
          Cantidad agregada {item.cantidad } 
          <button onClick={()=>EliminarItem(id) }>Eliminar</button>
          </li>)}
      </ul>
      <div>
        <button onClick={vaciarCarrito}> Vaciar carrito</button>
      </div>
      
      <Link to='/'>
            <button onClick={()=>console.log('ir al inicio')}>seguir comprando</button>
            </Link>
    </div>
  )
}
export default Cart;