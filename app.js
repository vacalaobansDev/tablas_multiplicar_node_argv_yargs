
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');


const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let commando = argv._[0];

switch (commando) {
    case 'listar':
        
    listarTabla( argv.base, argv.limite )
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch( e => console.log(e));

        break;

    case 'crear':

        crearArchivo( argv.base, argv.limite )
            .then(archivo => console.log(`Archivo creado: `, colors.green( archivo ) ))
            .catch( e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');
        break;
}


//let argv2 = process.argv;
////let parametros = argv[2];

//console.log(argv.base);
////let base = parametros.split('=')[1];

/*
*/


