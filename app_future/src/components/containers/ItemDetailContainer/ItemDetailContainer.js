import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../utils/getFetch/getFetch';
import { Loading } from '../../../utils/Loading/Loading';
import { collection, doc, getDocs, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db, 'items', id ) 
        getDocs(queryCollection)
            .then(data => setProducts(data.docs.map(item =>({id: item.id, ...item.data()})))) 
            .catch(error => console.log(error))
            .finally(() => console.log(false))



        /*  getFetch(id)
             .then((resp) => setProduct(resp))
             .catch(error => console.log(error))
             .finally(()=>setLoading(false))
  */
    }, [])

    console.log(products)
    return (
        <div>
            <ItemDetail products={products} />
            <Loading loading={loading} />
        </div>
    )



}

export default ItemDetailContainer