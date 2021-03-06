module.exports = class Queue {

    constructor(){
        this.data = []           //Armazenameno
        this.head = 0           //"cabeça (Inicio da fila)"
        this.tail = -1          //''Cauda" (final da fila)
    }

    //Inserção 
    enqueue(value){
        this.tail++
        this.data[this.tail] = value
    }

    //Remoção 
    dequeue(){
        let value = this.data[this.head]
        delete this.data[this.head]
        this.head++
        return value
    }

    //"Olhadinha" (no inicio da fila)
    peek() {
        return this.data[this.head]
    }
    
    //Tamanho da fila 
    size(){
        return this.tail - this.head + 1
    }
}