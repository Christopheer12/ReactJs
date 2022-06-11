let menu =[
    {
        id:'1',
        nombre: 'pollo',
        descripcion:'$500',
        stock: 5,
    },
    
    {
        id:'2',
        nombre: 'carne',
        descripcion:'$600',
        stock: 5,
    },
    {
        id:'3',
        nombre: 'pescado',
        descripcion:'$1000',
        stock: 8,
    },
    
    ];

let menu2 =[
    {
        id:'1',
        nombre: 'pollo',
        descripcion:'$1500',
        stock: 1,
    },
    
    {
        id:'2',
        nombre: 'carne',
        descripcion:'$1600',
        stock: 1,
    },
    {
        id:'3',
        nombre: 'pescado',
        descripcion:'$2000',
        stock: 1,
    },
    
    ];

const getFetch =() =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(menu)
            console.log(menu);
        }, 5000);
        setTimeout(() => {
            reject(menu2)
            console.log(menu2);
        }, 10000);
       

       
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