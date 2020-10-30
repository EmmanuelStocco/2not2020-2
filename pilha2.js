const Stack = require('./lib/Stack') //IMPORTANDO STACK.JS DA PASTA LIB -  a pilha

let pilha = new Stack()

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length ; i++){
    //inserção na pilha sempre no final
    pilha.push(texto.charAt(i))//puxando a letra por letra
}

console.log(pilha)

let inverso = ''
while(pilha.size() > 0){
    //retira na pilha devem ser feitas também no final 
    inverso += pilha.pop()
}

console.log(inverso)


/*
console.log(pilha)

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(4)

console.log(pilha)
console.log('Ultimo lemento:', pilha.peek())
console.log('Tamanho: ', pilha.size())

//pilha.unshifit(3)

let x = pilha.pop()
console.log('x: ', x)
console.log('Ultimo elemento: ', pilha.peek())
console.log('Tamanho: ', pilha.size())
console.log()
*/