//adaptando o bubble sort para operar com vetor de objetos
//1 acrescentar um novo parametro, que vai corresponder a função de comparação(fnComp)
//2 esse função ser chamada de dentro do bubblesort(), recebendo o elemento 
//da posição atual e da posição seguinte como parametros.
//Ela deve retornar true caso o primeiro paraetro seja maior que o segundo,
//ou false caso o contrario


function bubbleSort(vetor, fnComp) {
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    let trocas
    do {
        passadas++
        trocas = 0
        // Percurso do vetor até a PENÚLTIMA POSIÇÃO (length - 2)
        for(let i = 0; i <= vetor.length - 2; i++) {
            comparacoes++
            // Comparando o elemento da posição atual (i)
            // com o elemento da frente (i + 1)
            //if(vetor[i] > vetor[i + 1]) {
                if(fnComp(vetor[i], vetor[i +1])){
                // Troca usando desestruturação de vetor
                [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]]
                trocas++
                totalTrocas++
            }
        }
    } while(trocas > 0)
    // Exibindo as estatísticas
    console.log({passadas, comparacoes, totalTrocas})
}

const candidatos = require('./dados/candidatos-2018')
/*
for(let prop in candidatos[0]){
    console.log(prop)
}
process.exit(0)
*/


console.time('Teste candidatos')
bubbleSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO < b.NM_URNA_CANDIDATO)
console.timeEnd('Teste candidatos')


//Fazendo um map() para produzir um novo vetor só com nomes dos candidatos
const nomesCandidatos = candidatos.map(o => o.NM_CANDIDATO)
console.log(nomesCandidatos)


/*
//teste com localeCompare()
//só os 1000 primeiros candidatos
const candidatos1000 = candidatos.splice(0,999)

console.time('Teste candidatos')
//localeCompare() faz corretamente a ordenação considerando os acnetos, mas é muito mais lento
// que opções binarias mais lento
bubbleSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO.localeCompare(b.NM_URNA_CANDIDATO, 'pt-BR') > 0)
console.timeEnd('Teste candidatos 1000')

console.log(candidatos1000)
*/