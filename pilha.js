let pilha = []

let texto = 'SER OU NÃO SER EIS A QUESTÃO'

for(let i = 0; i < texto.length ; i++){
    //inserção na pilha sempre no final
    pilha.push(texto.charAt(i))//puxando a letra por letra
}

let inverso = ''
while(pilha.lenght > 0){
    //retira na pilha devem ser feitas também no final 
    inverso += pilha.pop()
}

console.log(pilha)
console.log(inverso)
//função nativa do js de inverter string
console.log(pilha.reverse()) //inverte quando é array

//usando vetor como pilha é volatil (isso é ruim