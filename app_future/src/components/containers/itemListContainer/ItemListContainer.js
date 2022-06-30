import { useEffect, useState } from 'react';
/* import { useParams } from 'react-router-dom'; */
import { doc, getDoc, getFirestore } from 'firebase/firestore'
/* import { getFetch } from '../../../utils/getFetch/getFetch'; */
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {
    const [bool, setBool] = useState(true)
    /* const [products, setProducts] = useState([])
    const { estadoId } = useParams() */

    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db, 'items', '3NOKnzHPi8W5NOrxjaaZ')
        getDoc(queryItem)
        .then(resp =>console.log(resp))

    }, [bool])
    /* if (estadoId) {
        getFetch()
            .then((resp) => {
                setProducts(resp.filter(products => products.estado === estadoId))
            })
            .catch(error => console.log(error))


    } else {
        getFetch()
            .then((resp) => {
                setProducts(resp)
            })
            .catch(error => console.log(error))
            .finally(() => console.log())

    }

}, [estadoId]) */

    return (
        <div>
           {/*  <ItemList products={products} /> */}
        </div>
    )
}

export default ItemListContainer