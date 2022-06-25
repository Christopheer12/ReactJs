import { Link } from "react-router-dom";
const Item = ({ product }) => {
    return (

        <div className='col-md-4 p-1'>
            <div className="card w-100 mt-5">
                <div className="card-header">
                    {`${product.nombre} - ${product.precio}`}
                </div>
                <div className="card-body">
                    <img src={product.foto} className='w-50' />

                </div>
                <div className="card-footer">
                    <Link to={`/detalles/${product.id}`}  >
                        <button className="btn btn-outline-primary btn-block">ver mas detalles</button>
                    </Link>

                </div>
            </div >
        </div>
    )

}
export default Item