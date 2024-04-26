const registra = require('./operaciones')

const condicion = process.argv.slice(2)

const [opcion , ...data] = condicion

switch (opcion) {
    case 'leer':
        registra.leer()
        break;
    case 'registrar':
        registra.registrar(data)
        break;
    // case 'eliminar':
    //     registra.eliminar(data)
    //     break;
    // case 'modificar':
    //     registra.modificar(data)
    //     break;
    default:
        console.log('opcion no existe')
        break;
}