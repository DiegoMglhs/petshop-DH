var moment = require('moment');
const fs = require('fs');
let bdPets = JSON.parse(fs.readFileSync("./bancoDados.json"));

var pets = bdPets.pets;

const nomePetshop = 'PETSHOP AVANADE';

const WriteJson = (pets) =>{
    var _pets = JSON.stringify(pets, null, 2);// ,null, 2 < faz com que ao escrever no JSON já idente o código de maneira correta!
    fs.writeFileSync('bancoDados.json', _pets, 'utf-8');
}

const listarPets = () => {
    pets.forEach(pet => {
        let {nome, idade, tipo, raca, vacinado} = pet
        console.log(`--> ${nome}:\n\tIdade: ${idade}\n\tTipo: ${tipo}\n\tRaca: ${raca}\n`);
        console.log("\tStatus: "+ (vacinado ? "Vacinado" : "não vacinado"))
    }); 
}

// console.log(listarPets());

const animal = "Rex";

const Buscapet = (pets) => {
    localizador = pets.find(pets => pets.nome === animal);
    console.log(localizador.nome);
}
//Buscapet(pets);

var locClientes = pets.map(function(pets, nome){
    return pets.nome;
 });

// console.log(locClientes);


const vacinarPets = (pet) => {
    let {vacinado, nome} = pet
    if (!vacinado) {
        vacinado = true;
        console.log(`* ${nome} foi vacinado.`);
    } else {
        console.log(`${nome} já estava vacinado.`);
    }
}

const campanhaVacina = (pets) => {
    petsVacinados = pets.filter(pets => pets.vacinado === false);
    for(let pet of pets)
        vacinarPets(pet);
    console.log(`\nPets vacinados na campanha: ${petsVacinados.length}.`);
    WriteJson(bdPets);
}

// campanhaVacina(pets);


const adicionarPet = (novoPet) => {
    pets.push(...novoPet);
    WriteJson(bdPets);
    novoPet.forEach((pet)=>{
        let {nome} = pet;
        console.log(`${nome} foi adicionado com sucesso!`);
    })
}

adicionarPet([{
    "nome": "Bidu",
    "tipo": "gato",
    "idade": 3,
    "raca": "American",
    "peso": 28,
    "tutor": "Doug",
    "contato": "(11) 99999-9999",
    "vacinado": true,
    "servicos": []
},
{
    "nome": "Eva",
    "tipo": "gato",
    "idade": 3,
    "raca": "American",
    "peso": 28,
    "tutor": "Hendy",
    "contato": "(11) 99999-9999",
    "vacinado": true,
    "servicos": []
},
{
    "nome": "Tag",
    "tipo": "gato",
    "idade": 3,
    "raca": "American",
    "peso": 28,
    "tutor": "Doug",
    "contato": "(11) 99999-9999",
    "vacinado": true,
    "servicos": []
}]);

const darBanhoPet = (pet) => {
    pet.servicos.push({
        servico: "banho",
        data: moment().format("L - LTS")
    });
    let {nome} = pet;
    console.log(`${nome} está de banho tomado!`);
}

const tosarPet = (pet) => {
    pet.servicos.push({
        servico: "tosa",
        data: moment().format("L - LTS")
    });
    let {nome} = pet;
    console.log(`${nome} está com cabelinho na regua!`);
}

const apararUnhasPet = (pet) => {
        pet.servicos.push({
            servico: "unha",
            data: moment().format("L - LTS")
        });
        let {nome} = pet;
        console.log(`${nome} está de unhas aparadas!`);
}

const clientePremium = (pet) => {
    const servicos = pet.servicos.map(x => x = 1);
    const somaServicos = servicos.reduce((sum, current) => sum + current);
    console.log((somaServicos>=3) ? "Cliente nao elegivel" : "** CLIENTE PREMIUM: Elegivel para desconto.");
}

// clientePremium(pets[4]);

// const atenderCliente = (pet, servico) => {
//     servico(pet);
//     WriteJson(bdPets);
// }

// atenderCliente(pets[0], darBanhoPet);
// atenderCliente(pets[2], apararUnhasPet);
// atenderCliente(pets[1], tosarPet);

// // console.log("\n");
// // for (const pet of pets) {
// //     console.log(pet);
// // }