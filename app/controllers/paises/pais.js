const Pais = require('../../models/paises');


async function GetPaises() {
    let data = await Pais.find({});
    return data;
}

async function GetPais(id) {
    let data = await Pais.findOne({ id: id });
    return data;
}


async function NewPais(pais) {
    const { id, nombre, continente, habitantes } = pais;

    /* let valida = await GetPais(id);
    if(valida)
    {
        return "El id ya existe "
    } */
    /* let nuevoPais = new Pais({
        id,
        nombre,
        continente,
        habitantes
    })
    let data = await nuevoPais.save(); */

    let data = await Pais.create({ id, nombre, continente, habitantes })

    return data;
}

async function UpdatePais(id, pais) {
    const paisEncontrado = await GetPais(id)
    if(paisEncontrado){
        console.log("entró")
        let data = await Pais.updateOne({id:id}, {$set:{nombre: pais.nombre}})
        return data
    } else {
        console.log("No se encontró ningun registro")
    }
}

async function DeletePais (id) {
    const paisEncontrado = await GetPais(id)
    if(paisEncontrado){
        let data = await Pais.deleteOne({id})
        return data
    } else {
        console.log("No encontró ningún registro")
    }
}

module.exports = {
    GetPaises,
    NewPais,
    GetPais,
    UpdatePais,
    DeletePais
}

/* const GetPaises = async ()=>{

} */