import {useState} from 'react'

function CountMenos(){
    const[count, disminuyeCount]= useState(0)
    function menos(){
        disminuyeCount(count - 1)
    } 

    
    return(
        <div>
            <p>{count}</p> 
            <button onClick={menos}>-</button>
        </div>
    )
}


export default CountMenos