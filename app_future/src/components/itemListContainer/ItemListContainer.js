import {useEffect, useState} from 'react';
import getFetch from "../../utils/getFetch/getFetch";



const ItemListContainer =()=>{
    const [products,setProducts] = useState([])
useEffect(()=>{
       getFetch()
        .then((resp)=>{
            setProducts(resp)
        })
        .catch(error => console.log(error))
        .finally(()=> console.log())
   
},[])
console.log(products)
     
return(
    <div>
        {products.map(products=> <li key={products.id}>{products.nombre}{products.descripcion}</li>)}
    </div>
)

        
    
}

export default ItemListContainer