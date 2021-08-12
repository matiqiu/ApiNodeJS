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

      let data = await Pais.create({ id,nombre,continente,habitantes})

    return data;
}

module.exports = {
    GetPaises,
    NewPais,
    GetPais
}

/* const GetPaises = async ()=>{

} */