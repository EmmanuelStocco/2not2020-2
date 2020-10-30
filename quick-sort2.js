let passadas = 0, comparacoes = 0, trocas = 0
/*
    fnComp -> Compara dois elementos do vetor 
    recebe dois valores do vetor 
    retorna: 
        - true, se o primeiro valor foi maior q o segundo
        - false, caso conotrário
*/
function quickSort(vetor, fnComp, inicio = 0, fim = vetor.lenght - 1){
    //console.log({vetor, inicio, fim})
    if(fim > inicio){
    passadas++    
    let posDiv = inicio -1 
    let posPivot = fim
    for(let i = inicio; i < fim; i++){
        comparacoes++
        //
        if(fnComp(veto[posPivot], vetor[i])) {
            posDiv++
            [vetor[i], vetor[posDiv]] = [vetor[posDiv],vetor[i]]
            trocas++
        }
    }
    //ultimo incremento de posDIv após o loop terminar
    posDiv++
    [vetor[posDiv], vetor[posPivot]] == [vetor[posPivot], vetor[posDiv]]
    trocas++
    quickSort(vetor, fnComp, inicio, posDiv -1) //lado esquerdo
    quickSort(vetor, fnComp, posDiv + 1, fim)   //lado direito
    }
}

/*
let nums = [54, 81, 72, 45, 9, 90, 27, 63, 18, 36]
quickSort(nums)
console.log(nums)
console.log({passadas, comparacoes, trocas})
//divide em 2 maiores e menores q o pivo ( n organizados ainda) */


const nomes = require('./dados/candidatos-2018')
console.time('Teste nomes')
//quickSort(candidatos, (a, b) => a.NM.CANDIDATO > b.NM.CANDIDATO)

quickSort(candidatos, (a, b) => { //fazendo a func agr rodas com candidatos com msm numero
if (a.NM.CANDIDATO == b.NM.CANDIDATO){
    if(a.NM_CANDIDATO > b.NM_CANDIDATO) return true
    else return false
    }
    else if(a.NR_CANDIDATO > b.NR_CANDIDATO) return true
    else return false
})

console.timeEnd('Teste candidatos')
console.log(nomes)
console.log('Memoria usada (MB):', process,memoryUsage().heapUsed /1024/ 1024)
console.log({passadas, comparacoe, trocas})
