// let bancoDados = require('./bancoDados.json');

// let pets = bancoDados.pets;


// const atenderCliente = (pet, servico) => {
//     console.log(`Olá, ${pet.nome}`);

//     // if(servico){
//     //     servico();
//     // }
//     (servico) ? servico() : console.log('só vim dar uma olhadinha');

//     console.log('Tchau, até mais!');
// }

// const darBanho = () => {
//     console.log('dando banho no pet...');
// }

// const apararUnhas = () => {
//     console.log('Aparando unhas...');
// }

// // atenderCliente(pets[0], darBanho);
// // console.log("---------")
// // atenderCliente(pets[2], apararUnhas);
// // console.log("---------")
// // atenderCliente(pets[1]);


// //desestruturação

// let pessoa = {
//     nome: 'Iago',
//     idade: 25,
//     profissao: 'dev',
//     contato: '119999999',
//     habilidades: ['node.js', 'mysql', 'javascript', 'html']
// }

// let {nome, contato} = pessoa;

// // console.log(`${pessoa.nome} - ${pessoa.contato}`);
// console.log(`${nome} - ${contato}`);


//spred

let turma1 = ["jose","joão","pedro"];
let turma2 = ["Anna", "joana","leticia"];

// let turmaAvana = [turma1,turma2]; // sem spred
let TurmaAvanade = [...turma1, ...turma2];
console.log(TurmaAvanade); // transformou em 1 só array