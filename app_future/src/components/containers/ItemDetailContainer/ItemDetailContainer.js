import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFetchOne } from '../../../utils/getFetch/getFetch';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
const {id} = useParams()
    useEffect(() => {
        getFetchOne()
            .then((resp) =>  setProduct(resp.find(prod => prod.id ===id)))
            .catch(error => console.log(error))
           

    }, [])

    
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )



}

export default ItemDetailContainer