module.exports = class Stack { //com module.exports permite usar a classe em outro arquivo
    
    constructor(){
        this.data = {} //armazenamento
        this.count = 0
    }

    //inserção
    push(value){
        this.count++
        this.data[this.count] = value
    }

    //remoção
    pop(){
        let value = this.data[this.count]
        delete this.data[this.count]
        this.count--
        return value
    }

    //verifica o topo da pilha ('da um visu')
    peek(){
        return this.data[this.count]
    }

    //retorna o numero de elementos da pilha
    size(){
        return this.count
    }
}