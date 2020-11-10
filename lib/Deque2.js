module.exports = class Deque {
    
    constructor(){
        this.data = {}
        this.head = 0
        this.tail = -1
    }

    //Inserção
    insertFront(value){
        this.head--
        this.data[this.head] = value
    }

    //Inserção no fim  
    insertRear(value){
        this.tail++
        this.data[this.tail] = value
    }

    //Remoção no inicio 
    removeFront(){
        let value = this.data[this.tail]
        delete this.data[this.head]
        this.head++
        return value
    }

    //Remoção do fim 
    removeRear(){
        let value = this.data[this.tail]
        delete this.data[this.tail]
        this.head--
        return value
    }

    //"Olhadinha" no inicio
    peekFront(){
        return this.data[this.head]
    }

    //"Olhadinha" no final
    peekRear(){
        return this.data[this.tail]
    }

    // Tamanho do deque
    size(){             //igual ao size do Queue2
        return this.tail - this.head + 1
    }
}