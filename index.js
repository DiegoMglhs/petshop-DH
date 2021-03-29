var moment = require('moment');
const fs = require('fs');
const bdPets = JSON.parse(fs.readFileSync("./bancoDados.json"));

var pets = bdPets.pets;

const nomePetshop = 'PETSHOP AVANADE';

const WriteJson = (pets) =>{
    var _pets = JSON.stringify(pets, null, 2);// ,null, 2 < faz com que ao escrever no JSON já idente o código de maneira correta!
    fs.writeFileSync('bancoDados.json', _pets, 'utf-8');
}

const listarPets = () => {
    for(let pet of pets){
        console.log(`--> ${pet.nome}:\n\tIdade: ${pet.idade}\n\tTipo: ${pet.tipo}\n\tRaca: ${pet.raca}\n`);
        console.log("\tStatus: "+ (pet.vacinado ? "Vacinado" : "não vacinado"))
    }
}

//console.log(listarPets());

const vacinarPets = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`* ${pet.nome} foi vacinado.`);
    } else {
        console.log(`${pet.nome} já estava vacinado.`)
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


const insereCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    newPet = {
        nome, 
        tipo, 
        idade, 
        raca, 
        peso, 
        tutor, 
        contato, 
        vacinado, 
        servicos
    }
    pets.push(newPet);
    WriteJson(bdPets);
}

insereCliente("Zé", "porco", 3, "Sem-Mundial", 5, "Gui", "(81) 99902-4433", false, []);
// console.log(pets[pets.length-1]);

const darBanhoPet = (pet) => {
    pet.servicos.push({
        servico: "banho",
        data: moment().format("L - LTS")
    });
    console.log(`${pet.nome} está de banho tomado!`);
}

const tosarPet = (pet) => {
    pet.servicos.push({
        servico: "tosa",
        data: moment().format("L - LTS")
    });
    console.log(`${pet.nome} está com cabelinho na regua!`);
}

const apararUnhasPet = (pet) => {
        pet.servicos.push({
            servico: "unha",
            data: moment().format("L - LTS")
        });
        console.log(`${pet.nome} está de unhas aparadas!`);
}

const atenderCliente = (pet, servico) => {
    servico(pet);
    WriteJson(bdPets);
}

atenderCliente(pets[0], darBanhoPet);
atenderCliente(pets[2], apararUnhasPet);
atenderCliente(pets[1], tosarPet);

// console.log("\n");
// for (const pet of pets) {
//     console.log(pet);
// }
