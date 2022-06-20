import {useState} from 'react'




const Count=({inicio, stock, onAdd})=>{
     const[count, modificaCount]= useState(inicio)
    
    function mas(){
      
        
        
        modificaCount(count + 1)
    }
    function menos(){
        if(count>1)
        modificaCount ( count - 1 )
       
    }
    const subirACarrito =()=>{
        onAdd(count)
        
      }

    
    return(
        <div>
            <p>Agregar al carrito: {count} Unidades</p> 
           
            <button onClick={menos}>-</button>
            <button onClick={mas}>+</button>
            <button onClick={subirACarrito}>agregar al carrito</button>
        </div>
    )
}


export default Count