let menu =[
{
    id:'1',
    nombre: 'pollo',
    descripcion:'bbq',
    stock: 5,
},

{
    id:'2',
    nombre: 'carne',
    descripcion:'española',
    stock: 5,
},
{
    id:'3',
    nombre: 'pescado',
    descripcion:'santo',
    stock: 8,
},

];
const getFetch =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(menu)
        }, 3000);
       

       
    })
}

const Item =()=>{
    getFetch()
    .then((primero)=>{
        console.log(primero)
    })
    .catch(error => console.log(error))
    .finally(()=> console.log('biemvenido'))
    
    return(
        <div> Item</div>
        
    )
}

export default Item