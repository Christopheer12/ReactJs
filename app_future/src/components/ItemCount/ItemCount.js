import {useState} from 'react'

function Count(){
    const[count, modificaCount]= useState(0)
    function mas(){
        modificaCount(count + 1)
    }
    function menos(){
        modificaCount(count - 1)
    }
  

    
    return(
        <div>
            <p>{count}</p> 
            <button onClick={mas}>+</button>
            <button onClick={menos}>-</button>
            
        </div>
    )
}


export default Count