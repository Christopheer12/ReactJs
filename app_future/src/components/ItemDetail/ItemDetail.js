import Count from '../Count/Count'
import { useState } from 'react';
const ItemDetail = ({products}) => {
  
  const [count, modificaCount] = useState(0)
  const onAdd = (cant) => {
    console.log(cant)
  }
    
    return (
        <div class="container">
        <div class="row">
          <div class="col-9">{products.nombre}</div>
          <div class="col-4">
          <img src={products.foto} alt='' className='w-50' />
          </div>
          <div class="col-6">{products.descripcion}</div>
          <div class="col-6">{products.precio}</div>
        </div>
        <Count inicio={1} stock={10} onAdd={onAdd} />
      </div>
      
    );
}
export default ItemDetail;