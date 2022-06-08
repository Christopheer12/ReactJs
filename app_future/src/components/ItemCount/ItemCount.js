import {useState} from 'react'

function Count(){
    const[count, aumentaCount]= useState(0)
    function mas(){
        aumentaCount(count + 1)
    }
    function menos(){
        aumentaCount(count - 1)
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