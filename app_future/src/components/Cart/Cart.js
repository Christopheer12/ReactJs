import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import ItemDetail from '../ItemDetail/ItemDetail'
const Cart = () => {
  const { cart, vaciarCarrito, EliminarItem, precioTotal } = useCartContext()

  function finalizarCompra(e) {
    e.preventDefault()
    let orden = {}
    orden.buyen = { name: 'cris', mail: 'cristian1guerrero@hotmail.com', phone: '1150955582' }
    orden.total = precioTotal()
    orden.items = cart.map(ItemDetail => {
      const id = ItemDetail.id
      const nombre = ItemDetail.nombre
      const precio = ItemDetail.precio * ItemDetail.cantidad
      const cantidad = ItemDetail.cantidad

      return { id, nombre, precio,cantidad }

    })
    console.log(orden)
  }
  return (
    <div>
      <div>{cart.length < 1 ? <p>Carrito vacio</p> : <p>Tu articulos:</p>}</div>
      <ul>
        {cart.map(item => <li key={item.id}>
          <div className='w-25'>
            <img src={item.foto} className='w-25' />

          </div>

          {item.nombre}
          <p> ${item.precio} por unidad</p>
          {item.estado}

          Cantidad agregada {item.cantidad}
          <button onClick={() => EliminarItem(item.id)}>Eliminar</button>
        </li>)}
      </ul>
      <div>
        <button onClick={vaciarCarrito}> Vaciar carrito</button>
      </div>

      <Link to='/'>
        <button onClick={() => console.log('ir al inicio')}>seguir comprando</button>
      </Link>
      <p>el precio total del carrito es : ${precioTotal()}</p>
      <div>
        <button onClick={finalizarCompra}> Terminar compra</button>
      </div>
    </div>
  )
}
export default Cart;