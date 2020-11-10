const Deque = require('./lib/Deque2')

let deque = new Deque()

console.log(deque)

//usando o deuqe como fila comum
deque.insertRear('Zozimário')
deque.insertRear('Leandricia')
deque.insertRear('Sauloeber')
deque.insertRear('Tercivander')
deque.insertRear('Naldelaine')

console.log(deque)

//Fura-fila 
deque.insertFront('Yarilza')
console.log(deque)

//Verificando os pontos do deque
let primeiro = deque.peekFront()
let ultimo = deque.peekRear()
console.log(deque)
console.log({primeiro, ultimo})

//Desistencia do ultimo colocado
let desistente = deque.removeRear()
console.table(deque)
console.log({desistente})

//remoção do primeiro colocado
let proximo = deque.removeFront()
console.table(deque)
console.log({proximo})