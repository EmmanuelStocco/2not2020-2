let passadas = 0, comparacoes = 0, trocas = 0
function quickSort(vetor, inicio, fim){
    //console.log({vetor, inicio, fim})
    if(fim > inicio){
    passadas++    
    let posDiv = inicio -1 
    let posPivot = fim
    for(let i = inicio; i < fim; i++){
        comparacoes++
        if(veto[i] < vetor[posPivot]) {
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv],vetor[i]]
            trocas++
        }
    }
    //ultimo incremento de posDIv após o loop terminar
    posDiv++
    [vetor[posDiv], vetor[posPivot]] == [vetor[posPivot], vetor[posDiv]]
    trocas++
    quickSort(vetor, inicio, posDiv -1) //lado esquerdo
    quickSort(vetor, posDiv + 1, fim)   //lado direito
    }
}

let nums = [54, 81, 72, 45, 9, 90, 27, 63, 18, 36]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
//divide em 2 maiores e menores q o pivo ( n organizados ainda) */
/*
const nomes = require('./dados/100-mil-nomes')
console.time('Teste nomes')
quickSort(nomes)
console.timeEnd('Teste nomes')
console.log(nomes)
console.log('Memoria usada (MB):', process,memoryUsage().heapUsed /1024/ 1024)
console.log({passadas, comparacoe, trocas})
*/