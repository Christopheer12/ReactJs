import Count from '../Count/Count'

const ItemDetail = ({products}) => {
  
  
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
          <div class="col-6"><Count inicio={1} stock={10} onAdd={onAdd} /></div>

          <div class="col-6">{products.precio}</div>
        </div>
        
      </div>
      
    );
}
export default ItemDetail;