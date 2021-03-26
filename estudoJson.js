let arquivoJson = require("./package.json") // aqui tá como obj
// let petObj = {
//     nome: 'Doug',
//     idade: 4,
//     Tipo: 'Cachorro',
//     vacinado: false
// }

// console.log(JSON.stringify(petObj))
// petJASON = '{"nome":"Doug","idade":4,"Tipo":"Cachorro","vacinado":false}' // caso use `` permite que se quebre a linha
// console.log(JSON.parse(petJASON));

console.log(JSON.stringify(arquivoJson)); // passando obj para Json