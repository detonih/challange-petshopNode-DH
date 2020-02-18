const pets = [
    {
        nome: 'Henrique',
        idade: 30
    },
    {
        nome: "Jonas",
        idade: 15
    }
];

const listarPets = () => {
    let conteudo = "";
    for(let pet of pets) {
        conteudo += `
        ------------
        ${pet.nome}
        ------------`;
    }
    
    return conteudo;
}

const adicionarPet = (novoPet)=> {
    return pets.push(novoPet)
}

const buscarpets = petNome => {
    const encontrarPet = pets.filter(elem => {
        return elem.nome == petNome
    })

    return encontrarPet;
}

console.log(pets)
module.exports = { 
    listarPets,
    adicionarPet,
    buscarpets 
    };