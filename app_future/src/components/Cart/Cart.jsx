import React from 'react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  return (
    <div>
      
      <Link to='/'>
            <button onClick={()=>console.log('ir al inicio')}>seguir comprando</button>
            </Link>
    </div>
  )
}
