var moment = require('moment'); // require

const nomePetshop = "PETSHOP DH";

let pets = [

    {
        nome: 'Floquinho',
        tipo: 'cachorro',
        idade: 7,
        raca: 'Lhasa apso',
        peso: 4,
        tutor: 'Cebolinha',
        contato: '(81) 998899-4545',
        vacinado: false,
        servicos: ['tosa']

    },
    {
        nome: 'Percata',
        tipo: 'cachorro',
        idade: 2,
        raca: 'beagle',
        peso: 3,
        tutor: 'Jamal',
        contato: '(81) 979899-9568',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'melik',
        tipo: 'gato',
        idade: 4,
        raca: 'Vira-lata',
        peso: 2,
        tutor: 'George',
        contato: '(81) 99688-9568',
        vacinado: false,
        servicos: ['Corte de unhas']
    }
];

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
}