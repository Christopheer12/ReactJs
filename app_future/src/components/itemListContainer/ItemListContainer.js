import getFetch from "../../utils/getFetch/getFetch"


const ItemListContainer =()=>{
    
        getFetch()
        .then((resp)=>{
            console.log(resp)
        })
        .catch(error => console.log(error))
        .finally(()=> console.log('hola'))
   


        
    
}

export default ItemListContainer