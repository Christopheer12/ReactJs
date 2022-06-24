import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'

export const Cart = () => {
  const{cart} = useCartContext()
  return (
    <div>
      <ul>
        {cart.map(item =><li key={item.id}>{item.nombre}{item.precio} {item.estado}</li>)}
      </ul>
      
      <Link to='/'>
            <button onClick={()=>console.log('ir al inicio')}>seguir comprando</button>
            </Link>
    </div>
  )
}
