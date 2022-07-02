import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { Loading } from '../../../utils/Loading/Loading';
import {  doc, getDoc, getFirestore } from 'firebase/firestore'



const ItemDetailContainer = () => {
    const [products, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryItem = doc(db, 'items', id ) 
        getDoc(queryItem)
            .then(data => setProduct({id: data.id, ...data.data()}))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, )

    console.log(products)
    return (
        <div>
            <ItemDetail products={products} />
            <Loading loading={loading} />
        </div>
    )



}

export default ItemDetailContainer