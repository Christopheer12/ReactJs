let products = [
    {
        id: '1',
        nombre: 'Pollo',
        estado:'Crudo',
        descripcion: 'La carne de pollo es fuente importante de nutrientes como proteínas, lípidos, Vitamina 3 y minerales como calcio, hierro, zinc, sodio, potasio y magnesio, entre otros. De fácil digestión. La mayor parte de la grasa corporal del pollo se encuentra en la piel, por lo que al retirarla se reduce el consumo de grasa.',
        precio:'500',
        stock: 5,
        foto: 'https://www.carnave.com.ar/wp-content/uploads/2020/05/Pollo-entero.jpg',
    },
    {
        id: '2',
        nombre: 'Pollo',
        estado:'Cocido',
        descripcion: 'La carne de pollo es fuente importante de nutrientes como proteínas, lípidos, Vitamina 3 y minerales como calcio, hierro, zinc, sodio, potasio y magnesio, entre otros. De fácil digestión. La mayor parte de la grasa corporal del pollo se encuentra en la piel, por lo que al retirarla se reduce el consumo de grasa.',
        precio:'800',
        stock: 8,
        foto: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2021/09/claudio-schwarz-4qJlXK4mYzU-unsplash-scaled.jpg?fit=1200%2C801&quality=50&strip=all&ssl=1',
    },

    {
        id: '3',
        nombre: 'Carne',
        estado:'Crudo',
        descripcion: 'Es una fuente de vitamina B12; esta vitamina nos ayuda a metabolizar proteínas, a formar glóbulos rojos y a darle mantenimiento al sistema nervioso central.',
        precio:'1000',
        stock: 5,
        foto: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2016/01/ablandarcarne.jpg',
    },
    {
        id: '4',
        nombre: 'Carne',
        estado:'Cocido',
        descripcion: 'Es una fuente de vitamina B12; esta vitamina nos ayuda a metabolizar proteínas, a formar glóbulos rojos y a darle mantenimiento al sistema nervioso central.',
        precio:'1300',
        stock: 8,
        foto: 'https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdameditorialTelevisamexicomuyinteresantemxsalud1111energia-coccion-carne-588x257.imgo_.jpg',
    },
    {
        id: '5',
        nombre: 'Pescado',
        estado:'Crudo',
        descripcion: 'Tiene tantas proteínas como la carne, rico en vitaminas y minerales, pero además algunas variedades son también una importante fuente de Omega 3, ácidos grasos beneficiosos para la salud cardiovascular. El pescado es un alimento con propiedades nutricionales que favorecen la salud cardiovascular en todas las edades.',
        precio:'700',
        stock: 8,
        foto: 'https://thumbs.dreamstime.com/b/filete-de-pescado-crudo-tilapia-en-una-tabla-corte-con-lim%C3%B3n-y-especias-blanca-espacio-copia-158139877.jpg',
    },
    
   
    {
        id: '6',
        nombre: 'Pescado',
        estado:'Cocido',
        descripcion: 'Tiene tantas proteínas como la carne, rico en vitaminas y minerales, pero además algunas variedades son también una importante fuente de Omega 3, ácidos grasos beneficiosos para la salud cardiovascular. El pescado es un alimento con propiedades nutricionales que favorecen la salud cardiovascular en todas las edades.',
        precio:'1000',
        stock: 8,
        foto: 'https://recetas123.net/wp-content/uploads/pescado-frito.jpg',
    },

];

export const getFetch = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (id) {
                resolve(products.find(product => product.id === id))
            } else {
                resolve(products)
            }
        }, 1000);
    })
}


