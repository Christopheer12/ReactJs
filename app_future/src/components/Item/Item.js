const Item = ({prod}) => {
  return (

      <div className='col-md-4 p-1'>
          <div className="card w-100 mt-5">
              <div className="card-header">
                  {`${prod.nombre} - ${prod.precio}`}
              </div>
              <div className="card-body">
                  <img src={prod.foto}  className='w-50' />
                 
              </div>
              <div className="card-footer">
                  <button className="btn btn-outline-primary btn-block">ver mas detalles</button>
              </div>
          </div >
      </div>
  )

}
export default Item