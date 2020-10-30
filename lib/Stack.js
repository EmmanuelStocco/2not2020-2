//Stack é pilha
module.exports = class Stack { //com module.exports permite usar a classe em outro arquivo
    constructor(){
        this.data = [] //armazenamento
    }

    //inserção
    push(value){
        this.data.push(value)
    }

    //remoção
    pop(){
        return this.data.pop()
    }

    //verifica o topo da pilha ('da um visu')
    peek(){
        return this.data[this.data.lenght - 1]
    }

    //retorna o numero de elementos da pilha
    size(){
        return this.data.length
    }
}