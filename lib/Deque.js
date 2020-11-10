/*
    Deque = Double-Ended Queue (Fila de duas pontas)
    Permite interseções remoções em qualquer um dos lados
*/

module.exports = class Deque {
    constructor(){
        this.data = []
    }

    insertFront(value){
        this.data.unshift(value)
    }

    //inserção no fim 
    insertRear(value) {
        this.data.push(value)
    }

    //Remoção do inicio
    removeFront(){
        return this.data.shift()
    }

    //Remoção do fim 
    removeRear(){
        return this.data.pop()
    }

    //"Olhadinha" no inicio
    peekFront(){
        return this.data[0]
    }

    //"Olhadinha" no final
    peekRear(){
        return this.data[this.data.length - 1]
    }

    size(){
        return this.data.length
    }
}