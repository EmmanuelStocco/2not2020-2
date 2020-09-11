let pessoa3 = {
    nome: 'hoao das couver',
    naturalidade: 'franca',
    "data de nascimento" : '1997-11-03',
    estudante_fatec: true
}

console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)
console.log(pessoa3['data de nascimento'])
console.log(pessoa3['naturalidade'])

let atrib = 'nome'
console.log(pessoa[atrib])

//criando novas propriedades em um objetos
pessoa3.nacionalidade ='portuguesa'          //unica palavra
pessoa3['registro de estrangeiro'] = 1223456 //varias palavras

console.log(pessoa3)


//Eliminando uma propriedade 
delete pessoa3.estudante_fatec

console.log('---------------------------')

console.log(pessoa3)

// Como percorrer todas as propriedades de um objeto: for..in
for(let prop in pessoa3){
    console.log(prop)
}

//listando atributo e valor de objeto usando for..in
for(let atrib in pessoa3){
    console.log('Atributo: ' + atrib + '; valor: ' + pessoa3[atrib])
}