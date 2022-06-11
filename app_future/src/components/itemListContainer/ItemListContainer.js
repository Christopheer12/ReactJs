import {useEffect, useState} from 'react';
import getFetch from "../../utils/getFetch/getFetch";



const ItemListContainer =()=>{
    const [products,setProducts] = useState([])
useEffect(()=>{
       getFetch()
        .then((resp)=>{
            console.log(resp)
        })
        .catch(error => console.log(error))
        .finally(()=> console.log('hola'))
   
})
     
return(
    <div>promesa</div>
)

        
    
}

export default ItemListContainer