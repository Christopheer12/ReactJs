import { useEffect, useState } from 'react';

import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

import ItemList from '../../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
    const [products, setProducts] = useState([])
    const {estadoId } = useParams() 
    


    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'items')

        if (estadoId) {
            
            const queryCollectionFilter = query( queryCollection, where( 'estado', '==', estadoId ) ) 
            getDocs(queryCollectionFilter)
            .then( data => setProducts( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => console.log(false))

            
        } else {
           
            getDocs(queryCollection)
            .then( data => setProducts( data.docs.map( item => ( { id: item.id, ...item.data() } )  ) ) )
            .catch(err => console.log(err))
            .finally(() => console.log(false))

        }
        
    }, [estadoId])  




       /*  const queryCollectionFilter = estado ? query(queryCollection,where('estado', '==', 'estado')) : queryCollection
        getDocs(queryCollectionFilter)
            .then(data => setProducts(data.docs.map(item =>({id: item.id, ...item.data()})))) 
            .catch(error => console.log(error))
            .finally(() => console.log(false)) */

   
    console.log(products)




    return (
        <div>
              { <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer

/* const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = query(queryCollection,where('estado','==','Crudo'))
        getDocs(queryCollectionFilter)
            .then(data => setProducts(data.docs.map(item => ({ id: item.id, ...item.data() }))))
            .catch(error => console.log(error))
            .finally(() => console.log(false))

    }, [])
    console.log(products) */