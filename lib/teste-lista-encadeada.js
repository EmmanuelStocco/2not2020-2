const LinkedList = require('./lib/LinkedList')

let lista = new LinkedList()
console.log(lista.toString(), lista.size())

lista.push('amarelo')
console.log(lista.toString(), lista.size())

lista.push('branco')
console.log(lista.toString(), lista.size())

lista.push('rosa')
console.log(lista.toString(), lista.size())

lista.push('azul')
console.log(lista.toString(), lista.size())

//inserção na primeira posição
lista.insertAt(0, 'roxo')
console.log(lista.toString(), lista.size())

//inserção na ultima posição (mesmo efeito que push())
lista.insertAt(5, 'verde')
console.log(lista.toString(), lista.size())

//inserção da posição 63
lista.insertAt(3, 'laranja')
console.log(lista.toString(), lista.size())

//inserção na posição 1
lista.insertAt(1, 'preto')
console.log(lista.toString(), lista.size())