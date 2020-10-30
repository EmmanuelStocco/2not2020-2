/*
    Area do retangulo: base * altura
    Area do triangulo: base * altura * 2
    arear do eclipse: (base / 2) * (altura / 2) * PI 
*/

let retangulo = {
    base:2.5,
    altura: 4.5,
    tipo: 'R' //Retangulo
}

let triangulo = {
    base: 2.5,
    altura: 4.5,
    tipo: 'T' //Triangulo
}

let eclipse = {
    base: 2.5,
    altura: 4.5,
    tipo: 'E' //Eclipse
}

const area = forma =>{
    switch(forma.tipo){
        case 'R':
            return forma.base * forma.altura
        case 'T':
            return forma.base * forma.altura /2
        case 'E':
            return (forma.base /2) * (forma.altura /2) * Math.PI
        default:
            return null //passando um tipo de forma invalido
    }
}

console.log(area(retangulo))
console.log(area(triangulo))
console.log(area(eclipse))