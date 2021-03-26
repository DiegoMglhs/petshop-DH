var moment = require('moment'); // require
var pets = require('./bancoDados.json');

const nomePetshop = "PETSHOP DH";


const novoCliente = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    novoPet = {
        nome: nome,
        tipo: tipo,
        idade: idade,
        raca: raca,
        peso: peso,
        tutor: tutor,
        contato: contato,
        vacinado: vacinado,
        servicos: []
    }

    pets.push(novoPet);
    return pets
}

novoCliente('Arnaldo', 'Porco', 12, 'sem-mundial', 32, 'Guilherme', '(11) 98655-2458', false, [] );
console.log(pets[pets.length-1]);
const vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`O pet  ${pet.nome} foi vacinado!`)
    } else {
        console.log(`O pet ${pet.nome} já estava vacinado`);
    }
}

const campanhaVacina = (pets) => {
    petsParaVacinar = pets.filter(pets => pets.vacinado === false);//usado comando filter para filtrar apenas os não vacidados, mas poderia ser substituido por um for dentro do for of.
    for(let pet of pets)
        vacinarPet(pet);
    console.log (`${petsParaVacinar.length}, pets foram vaciados nessa campanha!`);
}

campanhaVacina(pets);

const darBanhoPet = (pet) => {
    if(!pet.servicos.includes('banho')){
        pet.servicos.push('banho');
        console.log(pet.nome+' está de banho toamdo! ')
        console.log(moment().format("L - LTS"));
    }
}

const tosarPet = (pet) => {
    if(!pet.servicos.includes('tosa')){
        pet.servicos.push('tosa');
        console.log(pet.nome + ' está com cabelinho na régua! ')
        console.log(moment().format("L - LTS"));
    }
}

const apararUnhasPet = (pet) => {
    if(!pet.servicos.includes('unha')){
        pet.servicos.push('unha');
        console.log(pet.nome + ' está com as unhas cortadas! ')
        console.log(moment().format("L - LTS"));
    }
}

console.log("=====================================================")
console.log("        Adicionando Serviços \n")
for(let i=0; i < pets.length; i++){
    darBanhoPet(pets[i]);
    tosarPet(pets[i]);
    apararUnhasPet(pets[i]);
    console.log("--------------")
}