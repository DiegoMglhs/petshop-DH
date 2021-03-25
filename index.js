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
        servicos: ['banho', 'tosa']

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
        servicos: ['banho', 'Corte de unhas']
    }
];

vacinarPet = (pet) => {
    if (!pet.vacinado) {
        pet.vacinado = true;
        console.log(`O pet  ${pet.nome} foi vacinado!`)
    } else {
        console.log(`O pet ${pet.nome} já estava vacinado`);
    }
}

const campanhaVacina = (pets) => {
    var pets_vacinados = 0
    for(let pet of pets){
        if (!pet.vacinado) pets_vacinados++;
        vacinarPet(pet);
    }
    console.log (`${pets_vacinados}, pets foram vaciados nessa campanha!`);
}

campanhaVacina(pets);
// const listarPets = () => {
//     for(let pet of pets){
//         console.log(`${pet.nome}, ${pet.peso}, ${pet.raca}`)
//     }
// }

// listarPets();
