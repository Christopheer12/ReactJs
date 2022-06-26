import { Link } from "react-router-dom";
import { useCartContext } from '../Context/CartContext'

const Item = ({ product }) => {
    const{EliminarItem,CartContext}= useCartContext()
    const{id} = product;
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

    <button onClick={()=>EliminarItem(id) }>Eliminar</button>

                </div>
            </div >
        </div>
    )

}
export default Item