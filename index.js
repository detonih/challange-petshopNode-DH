const http = require('http');
const { 
    listarPets,
    adicionarPet,
    buscarpets 
    } = require('./petshop');
const url = require('url')

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain; charset=UTF-8"
    });

    const urlCompleta = url.parse(req.url, true); //retorna obj com partes dA URL
    const queryString = urlCompleta.query;
    const rota = urlCompleta.pathname;

    switch (rota) {
        case '/pets':
        const pets = listarPets();
        if(pets.length > 0) {
            res.write(pets)
        } else {
            res.write('nenhum pet encontrado')
        }
        break;
        case '/pets/add':
        const novoPet = queryString;
        if(adicionarPet(novoPet)) {
            res.write(`${novoPet.nome} foi cadastrado`);
        } else {
            res.write('deu ruim')
        }
        break;
        case '/pets/buscar': 
        const petsEncontrados = buscarpets(queryString.nome);

        if(petsEncontrados.length > 0) {
            res.write(` encontramos ${petsEncontrados.length} pets com o nome ${queryString.nome}`)
        } else {

            res.write('nao encontrado...');
        }
        break;
        default:
        res.write('Bem vindos ao PetShop');
    }
    res.end();
})
.listen(3000, "localhost", () => {
    console.log("Server is running at port 3000");
});
