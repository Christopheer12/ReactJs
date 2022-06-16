import { useEffect, useState } from 'react';
import { getFetch } from '../../../utils/getFetch/getFetch';
import ItemList from '../../ItemList/ItemList';



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
      getFetch()
            .then((resp) => {
                setProducts(resp)
            })
            .catch(error => console.log(error))
            .finally(() => console.log())

    }, [])

    

   




    return (
        <div>
            <ItemList products={products} />
        </div>
    )



}

export default ItemListContainer