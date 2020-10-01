/*
  Função de comparação fnComp
  - Recebe dois valores para comparação
  - Retorno:
   - true se o PRIMEIRO valor for MAIOR que segundo
   - false caso contrário
*/

function selectionSort(vetor, fnComp){
    let passadas = 0, comparacoes = 0, totalTrocas = 0
    //função que encontra o menor valor em um segmento de vetor(subvetor)
    //a função deve retornar a POSIÇÃO do menor valor encontrado
    function encontrarMenor(vetor, inicio){
     let posMenor = inicio
     for(let i = inicio + 1; i < vetor.lenght; i++){
         if(! fnComp(vetor[i] < vetor[posMenor])) posMenor = i
         comparacoes++
     }
         return posMenor
    }
    //o for externo vai até a penultima posição
    for(i = 0; i < vetor.lenght - 1; i++){
        passadas++

        //busca-se o menor valor no restante do vetor
        posMenor = encontrarMenor(vetor, i + 1)

        //Caso o valor encontrado seja menor que o valor atual, 
        //procede-se a troca
        comparacoes++
        //if(vetor[posMenor] < vetor[i])
        if(fnComp(vetor[i], vetor[posMenor])){
            //permuta de valores usando desestruturação
            [vetor[posMenor], vetor[i]] = [vetor[i], vetor[posMenor]]
            totalTrocas++
        }
    }
    console.log({passadas, comparacoes, totalTrocas})
}

const nums = [56, 78, 44, 23, 99, 14, 60, 37, 6, 82, 31, 65]
/*
console.log(encontrarMenor(nums, 3)) //retornar 8(posição do valor 6)
*/
let candidatos = require('./dados/candidatos-2018')
console.time('Teste nomes')
selectionSort(candidatos, (x, y) => x.NM_CANDIDATO > y.NM_CANDIDATO)
console.timeEnd('Teste nomes')
//medindo a memória utilizada pelo programa
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //kilobites-megabites
console.log(candidatos)
console.log('Memória utlizada (MB):', memoria)