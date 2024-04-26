const {writeFileSync,readFileSync} = require('fs');
const readfile = () =>{
    const veterinaria = JSON.parse(readFileSync('citas.json','utf-8'));
    return veterinaria
}

const writefile = (obj) =>{
    writeFileSync('citas.json',JSON.stringify(obj))
    console.log('\n')
    console.log('|----------------------------------------> Agenda de Citas de Animales <----------------------------------------|')
    console.log(readfile())
    console.log('|-----------------------------------------------> Fin <-------------------------------------------------|')
    console.log('\n')
}

const registrar = (data) =>{
    const [nombre_animal,edad,tipo_animal,color_animal,enfermedad] = data
    const obj_archivo = readfile()
    const new_veterinaria ={
            nombre_animal,
            edad,
            tipo_animal,
            color_animal,
            enfermedad
        }
    obj_archivo.push(new_veterinaria)
    console.log('\n')
    console.log('|----------------------------------------> Se Agrego el Animal <----------------------------------------|')
    console.log(new_veterinaria)
    console.log('|-----------------------------------------------> Fin <-------------------------------------------------|')
    console.log('\n')
    writefile(obj_archivo)
}

const leer = () =>{
    const veterinaria = readfile()
    console.log('\n')
    console.log('|-----------------------------------> Lista de Citas de Animales <------------------------------------|')
    console.log(veterinaria)
    console.log('|----------------------------------------------> Fin <------------------------------------------------|')
    console.log('\n')
}

// const modificar = (data) =>{
//     const [id, campo, registro] = data
//     const obj_archivo = readfile()
//     const obj_actualizar = obj_archivo.find(archivo => archivo.id == id)
//     const new_veterinaria = obj_archivo.map(archivo => archivo.id == id ? {id, ...obj_actualizar, [campo]: registro} : archivo)
//     console.log('\n')
//     console.log('|--------------------------------------> Animal a Actualizar <----------------------------------------|')
//     console.log('| ',campo,': ',registro)
//     console.log('|-----------------------------------------------------------------------------------------------------|')
//     console.log(obj_actualizar)
//     console.log('|---------------------------------------------> Fin <-------------------------------------------------|')
//     writefile(new_veterinaria)
//     console.log('\n')
// }

// const eliminar = (data) => {
//     const [id] = data 
//     const obj_archivo = readfile()
//     const obj_delete = obj_archivo.find(archivo => archivo.id == id)
//     const new_veterinaria = obj_archivo.filter((archivo) => archivo.id != id) 
//     console.log('\n')
//     console.log('|--------------------------------------> La Cita a Eliminar es <--------------------------------------|')
//     console.log(obj_delete)
//     console.log('|----------------------------------------------> Fin <------------------------------------------------|')
//     console.log('\n')   
//     writefile(new_veterinaria) 
// }

module.exports = {
    registrar,
    leer
    // eliminar,
    // modificar
}