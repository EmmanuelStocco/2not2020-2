class FormaGeometrica {
    constructor(base = 1, altura = 1, tipo = 'R'){ //base altura e tipo
        if(isNaN(base) || base <=0){
            throw new Error (`A base deve ser numerica e maior que zero`)
        }

        if(isNaN(altura)||altura <= 0){
            throw new Error('Altura deve ser numérica e maior que zero')
        }

        //if(tipo != 'R' && tipo != 'T' &&)
        if(['R', 'T', 'E'].indexOf(tipo)<0){
            throw new Error('O tipo deve ser R, t ou E')
        }

        this.base = base
        this.altura = altura
        this.tipo = tipo
    }

    //metodo
    area(){
        switch(this.tipo){
            case 'R':
                return this.base * this.altura  
            case 'T':
                return this.base * this.altura / 2
            case 'E':
                return (this.base / 2) * (this.altura /2) * Math.PI
            default: //tipo invalido
                return null
        }
    }
}


const retangulo = new FormaGeometrica(4,6.5, 'R')
const triangulo = new FormaGeometrica(4, 6.5, 'T')
const elipse = new FormaGeometrica(4, 6.5, 'E')
const tchonga = new FormaGeometrica ('gambi', 'arra', 'E')

console.log(retangulo.base)
console.log(triangulo.base)
console.log(elipse.base)
console.log(tchonga)

console.log(retangulo.area())

retangulo.altura = 6
retangulo.base = 2.75
console.log(retangulo.area)

console.log(tchonga.area())

tchonga.base = 'trem'
console.log('Área de tchonga:', tchonga.area())