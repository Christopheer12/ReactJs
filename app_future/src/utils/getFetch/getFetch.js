
let products = [
    {
        id: '1',
        nombre: 'Pollo',
        descripcion: 'La carne de pollo es fuente importante de nutrientes como proteínas, lípidos, Vitamina 3 y minerales como calcio, hierro, zinc, sodio, potasio y magnesio, entre otros. De fácil digestión. La mayor parte de la grasa corporal del pollo se encuentra en la piel, por lo que al retirarla se reduce el consumo de grasa.',
        precio:'$500',
        stock: 5,
        foto: 'https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg',
    },

    {
        id: '2',
        nombre: 'Carne',
        descripcion: 'Es una fuente de vitamina B12; esta vitamina nos ayuda a metabolizar proteínas, a formar glóbulos rojos y a darle mantenimiento al sistema nervioso central.',
        precio:'$1500',
        stock: 5,
        foto: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/01/ablandarcarne.jpg',
    },
    {
        id: '3',
        nombre: 'Pescado',
        descripcion: 'Tiene tantas proteínas como la carne, rico en vitaminas y minerales, pero además algunas variedades son también una importante fuente de Omega 3, ácidos grasos beneficiosos para la salud cardiovascular. El pescado es un alimento con propiedades nutricionales que favorecen la salud cardiovascular en todas las edades.',
        precio:'$700',
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
        }, 1000);
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





