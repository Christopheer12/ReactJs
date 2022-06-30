import { useEffect, useState } from 'react';
/* import { useParams } from 'react-router-dom'; */
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
/* import { getFetch } from '../../../utils/getFetch/getFetch'; */
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {
    /* const [bool, setBool] = useState(true) */
    const [products, setProducts] = useState([])
    /* const { estadoId } = useParams() */

    /// vinculacion nativa

    /*     
        if (estadoId) {
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

    //Trayendo un solo item de firestore
    /* useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db, 'items', '3NOKnzHPi8W5NOrxjaaZ')
        getDoc(queryItem)
        .then(resp =>setProducts({id: resp.id, ...resp.data()}))
        .catch(error => console.log(error))
        
    }, [bool]) 
    console.log(products)
     */


    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
            .then(data => console.log(data))
        console.log(products)

    })




    return (
        <div>
            {/*   { <ItemList products={products} />} */}
        </div>
    )
}

export default ItemListContainer