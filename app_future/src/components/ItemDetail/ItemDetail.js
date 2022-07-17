
import { useCartContext } from '../Context/CartContext'
import Count from '../Count/Count'
const ItemDetail = ({products}) => {
  
  const{ addToCart}= useCartContext()
  const onAdd = (count) => {
    
    console.log(count)
    addToCart({...products, cantidad: count})
    
  }
  
    return (
        <div className="container">
        <div className="row">
          <div className="col-9">{products.nombre}</div>
          <div className="col-4">
          <img src={products.foto} alt='' className='w-50' />
          </div>
          <div className="col-6">{products.descripcion}</div>
          <div className="col-6"><Count inicio={1} stock={10} onAdd={onAdd} /></div>

          <div className="col-6"><p>Precio ${products.precio}</p></div>
        </div>
        
      </div>
      
    );
}
export default ItemDetail;