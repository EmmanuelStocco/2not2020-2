//
//
let comp = 0
//implementação recursiva
//uma função chama a si mesma com pelo menos um de seus parametros com valor alterado
//toda função recursiva precisa ter pelo menos uma condiçãode saida isso é, possiblidade de termino q 
//q n enolve uma chamada a ela mesma

//os parametros inicio e fim sao opcionais. Caso a função seja chamada sem especifica-los,
//eles assumirão os valores indicados
function buscaBinaria(lista, valorBusca, fnComp, inicio = 0, fim = lista.lenght -1) {
   // let inicio = 0
   // let fim = lista.length - 1
    
    if(fim >= inicio) {
        // Math.floor(): retira as casas decimais de um número
        let meio = Math.floor((fim + inicio) / 2)
        let res = fnComp(lista[meio], valorBusca)
        // Verifica se o valor na posição média é o valor de busca
        if(res == 0) {
            comp++
            return meio
        }
        else if(res < 0) {
            comp += 2
            //fim = meio - 1
            return buscaBinaria(lista, valorBusca, fnComp, inicio, meio - 1)
        }
        else {  // res > 0
            comp += 2
            inicio = meio + 1
        }
    }
    return -1       // Valor não encontrado
}
function comparaNome(obj, valorBusca) {
    // Os dois valores são iguais
    if(valorBusca === obj.first_name) return 0
    // Um número negativo para indicar que o primeiro < segundo
    else if(valorBusca < obj.first_name) return -1
    // Um número positivo para indicar que o primeiro > segundo
    else return 1 // valorBusca > obj.first_name
}

let nums = [4, 16, 22, 29, 35, 44, 52, 58, 66, 71, 80, 88, 94]

console.log(buscaBinaria(nums, 66, (elPos,busca) => {
    if(busca === elPos) return 0
    else if (busca < elPos) return -1
    else return 1
}, 0, 12))


//termina a execução sem passar pelas linhas abaixo
process.exit(0)
let listaNomes = require('.dados/lista-nomes')

console.time('FAUSTO')
console.log(buscaBinaria(listaNomes, 'Fausto', comparaNome))
console.timeEnd('FAUSTO')
console.log('Comparações: ', comp)

console.log('------------------------------------')
comp = 0

console.time('ENEDINO')
console.log(buscaBinaria(listaNomes, 'ENEDINO', (obj, busca) => {
    if(busca == obj.first_name)return 0
    else if(busca < obj.first_name) return -1
    else return 1
}))
console.timeEnd('ENEDINO')
console.log('Comparações: ', comp)