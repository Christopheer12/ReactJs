
const ItemDetail = ({products}) => {
    
    return (
        <div class="container">
        <div class="row">
          <div class="col-9">nombre</div>
          <div class="col-4">
          <img src="{products.foto}" alt='' className='w-50' />
          </div>
          <div class="col-6">{products.descripcion}y</div>
        </div>
      </div>
    );
}
export default ItemDetail;