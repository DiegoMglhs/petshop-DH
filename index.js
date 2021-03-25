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

novoCliente('Arnaldo', 'Porco', 12, 'sem-mundial', 32, 'Guilherme', '(11) 98655-2458', false );

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
