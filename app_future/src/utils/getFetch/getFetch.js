
let products = [
    {
        id: '1',
        nombre: 'pollo',
        descripcion: '$500',
        stock: 5,
        foto: 'https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg',
    },

    {
        id: '2',
        nombre: 'carne',
        descripcion: '$600',
        stock: 5,
        foto: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/01/ablandarcarne.jpg',
    },
    {
        id: '3',
        nombre: 'pescado',
        descripcion: '$1000',
        stock: 8,
        foto: 'https://www.cocinayvino.com/wp-content/uploads/2021/01/www.cocinayvino.com-para-una-ocasion-especial-salmon-asado-con-especias-salmon-asado-e1611607374689-1200x900.jpg',
    },

];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id) {
                resolve(products.find(prod => prod.id === id))
            } else {
                resolve(products)
            }
        }, 10000);
    })
}





///////////////////////


/* let product =
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
 */





