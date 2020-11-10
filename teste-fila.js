/*
    Estrtura de dados fila 
    Funcionamento FIFO (first IN, FIrst Out)
    (I primeiro que entra é o primeiro que sai)
*/
const Queue = require('./lib/Queue2')

let fila = new Queue()

console.log(fila)
//add gente na fila
fila.enqueue('Jurisvander')
fila.enqueue('Marineuza')
fila.enqueue('Periclenes')
fila.enqueue('Astrogildo')

console.log(fila)

let proximo = fila.dequeue()
console.log({proximo})
console.log(fila)

fila.enqueue('Katineia')
let primeiro = fila.peek()
console.log({primeiro})
console.table(fila)