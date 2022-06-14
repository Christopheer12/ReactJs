import React from 'react';

const itemDetail = () => {
    return (
        <div className='col-md-4 p-1'>
        <div className="card w-100 mt-5">
            <div className="card-header">
                {`${prod.nombre} - ${prod.descripcion}`}
            </div>
            <div className="card-body">
                <img src={prod.foto} alt='' className='w-50' />
               
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-primary btn-block">ver detalles</button>
            </div>
        </div >
    </div>
    );
}
export default itemDetail;