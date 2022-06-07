import {useState} from 'react'

function CountMas(){
    const[count, aumentaCount]= useState(0)
    function add(){
        aumentaCount(count + 1)
    } 

    
    return(
        <div>
            <p>{count}</p> 
            <button onClick={add}>+</button>
        </div>
    )
}

export default CountMas