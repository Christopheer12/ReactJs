
let products =[
    {
        id:'1',
        nombre: 'pollo',
        descripcion:'$500',
        stock: 5,
        foto:'https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg',
    },
    
    {
        id:'2',
        nombre: 'carne',
        descripcion:'$600',
        stock: 5,
        foto:'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/01/ablandarcarne.jpg',
    },
    {
        id:'3',
        nombre: 'pescado',
        descripcion:'$1000',
        stock: 8,
        foto:'',
    },
    
    ];

    export const getFetch = ()=>{
        return new Promise ((resolve)=>{
            setTimeout(() => {
               
                    resolve(products)
               
                console.log(products);
            }, 10000);
        })
    }





///////////////////////


let product =
    {
        id:'1',
        nombre: 'pollo',
        descripcion:'$500',
        stock: 5,
        foto:'https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg'
    };

    export const getFetchOne = ()=>{
        return new Promise ((resolve)=>{
            setTimeout(() => {
               
                    resolve(product)

                console.log(product);
            }, 100);
        })
    }






