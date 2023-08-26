
const fs =  require('fs');
const colors = require('colors');

let listarTabla = ( base, limite ) => {
    return new Promise ( (resolve, reject) => {
        crearArchivo( base, limite );
    });
};

let crearArchivo = ( base, limite=10 ) => {
    let data = '';
    return new Promise( (resolve, reject ) => {
        if( !Number(base) ){
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        for (let i = 0; i < limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;  
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {

            if (err) reject( err );

            else
                resolve( `tabla-${ base }-al-${ limite }.txt` );
          
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}


