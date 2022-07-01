import { useEffect, useState } from 'react';

import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'

import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {
  
    const [products, setProducts] = useState([])
    


    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
            .then(data => setProducts(data.docs.map(item =>({id: item.id, ...item.data()})))) 
            .catch(error => console.log(error))
            .finally(() => console.log(false))

    },[])
    console.log(products)




    return (
        <div>
              { <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer