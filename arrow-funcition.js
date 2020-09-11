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


//situação aleternativa 2: função com 1+ argumentos
//função tradicional com 1+ argumentos
let imc = function(peso, altura){
    return peso / (altura ** 2)
}
console.log(imc(87, 1.78))

//arrow funcion com 1+ argumentos
//Os parenteses dos argumentos são obrigatorios quando o numero de argumentos > 1
let imc2 = (peso, altura) => peso / (altura ** 2)
console.log(imc2(87, 1.78))


// situação alternativa 3: função com mais de uma linha no corpo

let fatorial = function(n){
   let res = 1
   for(let i = n; i < 1; i--){
       res *= i
   }
   return res
}

//Arrow function com corpo maior que uma linha
//tem mt oq fazer n, corpo longo n arrow tb
let fatorial2 = n => {
    let res = 1
    for(let i=n; i > 1; i--){
        res *= 1
    }
    return res
}

console.log(fatorial(5))
console.log('O resultado é ' + fatorial2(5))