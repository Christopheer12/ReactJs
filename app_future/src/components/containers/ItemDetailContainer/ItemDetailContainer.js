import { useEffect, useState } from 'react';
import ItemDetail from '../../ItemDetail/ItemDetail';
import getFetch from "../../../utils/getFetch/getFetch";
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const [products, setProducts] = useState({})
const {id} = useParams()
    useEffect(() => {
        getFetch(id)
            .then((resp) =>  setProducts(resp.find(prod => prod.id ===id)))
            .catch(error => console.log(error))
           

    }, [])

    
    return (
        <div>
            <ItemDetail products={products} />
        </div>
    )



}

export default ItemDetailContainer