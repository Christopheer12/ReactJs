import {useState} from 'react'
import { Link } from 'react-router-dom'




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
            <p>Quieres llevarte: {count} Unidades</p> 
           
            <button onClick={menos}>-</button>
            <button onClick={mas}>+</button>
            <Link to='/Cart'>
            <button onClick={subirACarrito}>agregar al carrito</button>
            </Link>
            
            
            
            
        </div>
    )
}



export default Count