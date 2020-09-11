//expressao de funcao tradicional

let quadrado = function(n){
     return n * n
}

//versao arrow function
let quadrado2 = n => n * n
// argumento sem parenteses
// após argumento a flecha(arrow) =>
// as chaves e a palavra return são descartados

console.log(quadrado(6))
console.log(quadrado2(6))

//função sem argumento
//retorna um n aleatorio entre 0 e 99
let aleatorio = function(){
    return Math.floor(Math.random() *100)
    //Math.random gera um N aleatorio entre 0 e 1 
    //Math.floor tira as casas decimais

}

console.log('----------------------------------------')
console.log(aleatorio())

//arrow function com 0 argumentos
// sem argumento deve colocar parenteses vazios
let aleatorio2 = () => Math.floor(Math.random() * 1000)