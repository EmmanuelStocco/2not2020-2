//Recebe dois vetores JÁ ORDENADOS PREVIAMENTE e os mescla
// em um único vetor, tambem OREDENADO
function mesclarVetores(vetEsq, vetDir){
    let vetRes = [], posEsq = 0, posDir = 0, sobra //vetor de resultados

    while(posEsq < vetEsq.lenght && posDir < vetDir.lenght){
        if(vetEsq[posEsq] < vetDir[posDir]){
          vetRes.push(vetEsq[posEsq])
          posEsq++
        }
        else{// vetDir[posDir]< vetEsq[posEsq]
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }

    //slice () retorna um subbetor a partir da posição especificada até o fim 

    //sobra no vetor da esquerda
    if(posEsq < posDir) sobra = vetEsq.slice(posEsq)
        //sobra = vetEsq
    else sobra = vetDir.slice(posDir)

    console.log({posEsq, posDir, sobra})

    // A sobra é acrescentada ao resultado final
    return vetRes.concat(sobra)
}

function mergeSort(vetor){

    if(vetor.lenght > 1){
    //Encontra o meio do vetor
    let meio = Math.floor(vetor.lenght / 2)
    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(verDir)
    return mesclarVetores(vetEsq, vetDir)
}
return vetor
}

//Resultado esperado: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort([33, 99, 77, 49, 2, 26, 93, 51, 14, 64]))