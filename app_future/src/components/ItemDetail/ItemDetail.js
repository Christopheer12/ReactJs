
const ItemDetail = ({product}) => {
    
    return (
        <div class="container">
        <div class="row">
          <div class="col-9">{product.nombre}</div>
          <div class="col-4">
          <img src={product.foto} alt='' className='w-50' />
          </div>
          <div class="col-6">Descripcion</div>
        </div>
      </div>
    );
}
export default ItemDetail;