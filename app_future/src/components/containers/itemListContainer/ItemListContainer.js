import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../../utils/getFetch/getFetch';
import ItemList from '../../ItemList/ItemList';



const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const { estadoId } = useParams()

    useEffect(() => {
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

    }, [estadoId])








    return (
        <div>
            <ItemList products={products} />
        </div>
    )



}

export default ItemListContainer