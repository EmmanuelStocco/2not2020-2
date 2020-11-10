/*
    Estrtura de dados fila 
    Funcionamento FIFO (first IN, FIrst Out)
    (I primeiro que entra é o primeiro que sai)
*/

module.exports = class Queue {

    constructor(){
        this.data = []           //Armazenameno
    }

    //Inserção 
    enqueue(value){
        this.data.push(value)
    }

    //Remoção 
    dequeue(){
        return this.data.shift()
    }

    //"Olhadinha" (no inicio da fila)
    peek() {
        return this.data[0]
    }
    
    //Tamanho da fila 
    size(){
        return this.data.length
    }
}