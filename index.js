const nomePetshop = "PETSHOP DH";

let pets =[

    {
        nome: 'Floquinho',
        tipo: 'cachorro',
        idade: 7,
        raca: 'Lhasa apso',
        peso: 4,
        tutor: 'Cebolinha',
        contato: '(81) 998899-4545',
        vacina: true,
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
        vacina: true,
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
        vacina: true,
        servicos: ['banho', 'Corte de unhas']
    }
];

const listarPets = () => {
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.peso}, ${pet.raca}`)
    }
}

// function listarPets() {
//     for (let i = 0; i < pet.length; i++) {
//         console.log(pet[i].nome);

//     }
// }
listarPets();
// console.log(pet);