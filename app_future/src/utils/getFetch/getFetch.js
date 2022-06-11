let products =[
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

    const getFetch = ()=>{
        return new Promise ((resolve)=>{
            setTimeout(() => {
                resolve(products)
                console.log(products);
            }, 5000);
        })
    }


export default getFetch