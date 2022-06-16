
const ItemDetail = ({prod}) => {
    
    return (
        <div class="container">
        <div class="row">
          <div class="col-9">s</div>
          <div class="col-4">
          <img src={prod} alt='' className='w-50' />
          </div>
          <div class="col-6">Descripcion</div>
        </div>
      </div>
    );
}
export default ItemDetail;