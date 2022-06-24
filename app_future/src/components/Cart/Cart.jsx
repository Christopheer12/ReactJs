import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

export const Cart = () => {
  const{cart, vaciarCarrito} = useCartContext()
  return (
    <div>
      <ul>
        {cart.map(item =><li key={item.id}>
          <div className='w-25'>
            <img src={item.foto} className='w-25'/>
            
          </div>
          
          {item.nombre}
          {item.precio}
          {item.estado} 
          Cantidad agregada {item.cantidad}</li>)}
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
