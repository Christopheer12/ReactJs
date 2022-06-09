const task = new Promise((resolve, reject)=>{
let condicion = false
if(condicion) {
    resolve('200 perfecto')
    }else{
        reject('404 no entrado')
    }


})

const Item =()=>{
    console.log(task)

    return(
        <div>Item</div>
    )
}


export default Item