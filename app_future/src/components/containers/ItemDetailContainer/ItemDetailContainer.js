import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../utils/getFetch/getFetch';



const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        getFetch(id)
            .then((resp) => setProduct(resp))
            .catch(error => console.log(error))

    }, [])

    console.log(products)
    return (
        <div>
            <ItemDetail products={products} />
        </div>
    )



}

export default ItemDetailContainer