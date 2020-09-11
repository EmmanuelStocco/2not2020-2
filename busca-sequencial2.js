function buscaSequencial (lista, valorBusca, fnComp){
    for(let i = 0; i < lista.lenght; i++){
       if(fnComp(lista[i], valorBusca)) return i
    } return -1
}

const listaNomes = require('./dados/lista-nomes')

function comparaNome(obj, nome){
    //Retorna true se o atributo first_name do objeto for igual ao nome
    return obj.first_name === nome
}

console.time('FAUSTO')
console.log(buscaSequencial(listaNomes, 'FAUSTO', (obj, nome) => obj.first_name === nome))
console.timeEnd('FAUSTO')

console.log('--------------------------------------------')

console.time('1000+')
//encontrar o primeiro nome da lista que possui mais de 10000 pessoas registradas
let pos = buscaSequencial(listaNomes, 10000, (obj, valor) => obj.frequency_total > valor)
//Exibe o objeto da posição encontrada e depois a propria posição
console.log(listaNomes[pos], pos)
console.timeEnd('10000+')