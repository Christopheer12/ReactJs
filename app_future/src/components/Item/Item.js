import { Link, NavLink } from "react-router-dom";
const Item = ({ prod }) => {
    return (

        <div className='col-md-4 p-1'>
            <div className="card w-100 mt-5">
                <div className="card-header">
                    {`${prod.nombre} - ${prod.precio}`}
                </div>
                <div className="card-body">
                    <img src={prod.foto} className='w-50' />

                </div>
                <div className="card-footer">
                    <Link to={`/detalles/${prod.id}`}  >
                        <button className="btn btn-outline-primary btn-block">ver mas detalles</button>
                    </Link>

                </div>
            </div >
        </div>
    )

}
export default Item