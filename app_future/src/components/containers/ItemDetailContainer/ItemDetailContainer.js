import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../utils/getFetch/getFetch';
import { Loading } from '../../../utils/Loading/Loading';



const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const [loading,setLoading] = useState(true)
    const { id } = useParams()
    
    useEffect(() => {
        getFetch(id)
            .then((resp) => setProduct(resp))
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))

    }, [])

    console.log(products)
    return ( 
        <div>
            <ItemDetail products={products} />
            <Loading loading={loading}/>
        </div>
    )



}

export default ItemDetailContainer