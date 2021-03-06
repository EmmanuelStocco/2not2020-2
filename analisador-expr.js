/*

    6 + {8 / [3 - (9 *2)] + (4 * 3)}
 
 */

 const Stack = require('./lib/Stack')

 let analisador = new Stack()

 let expr = '6 + {8 / [3 - (9 * 2)] + (4 *3)}'
//let expr = '6 + {8 / [3 - (9 *2)] + (4 * 3)} + (2-'
 let info

 for (let i = 0; i <expr.length; i++){
     switch(expr.charAt(i)){
        case '{':
             analisador.push({pos: i, tipo: 'CH'})
             break
        case '[':
             analisador.push({pos: i, tipo: 'CO'})
             break
        case '(':
            analisador.push({pos: i, tipo: 'PA'})
            break
        case '}':
            info = analisador.pop()
            //info n pode ser vazio e seu tipo deve ser ch
            if(info && info.tipo == 'CH'){
                console.log('Chave aberta na posição ' + info.pos + 'e fechada na posição ' + i)
            }
            else {
                console.log('Erro: chave fechando na posição ' + i + 'não tem abertura correspondente')
            }
            break

        case ']':
            info = analisador.pop()
            //info n pode ser vazio e seu tipo deve ser CO
            if(info && info.tipo == 'CO'){
                console.log('Colchete aberta na posição ' + info.pos + 'e fechada na posição ' + i)
            }
            else {
                console.log('Erro: colchete fechando na posição ' + i + 'não tem abertura correspondente')
            }
            break
        case ')':
             info = analisador.pop()
            //info n pode ser vazio e seu tipo deve ser PA
            if(info && info.tipo == 'PA'){
                console.log('parentese aberta na posição ' + info.pos + 'e fechada na posição ' + i)
            }
            else {
                console.log('Erro: parentese fechando na posição ' + i + 'não tem abertura correspondente')
            }
     }
 }

 //analisar residuo da pilha 
 while(pilha.size() > 0){ // enquanto ainda houver elementos na pilha
     info = pilha.pop()
     switch(info.tipo){
         case 'PA':
             console.log('Erro: Parentese aberto na posição' + info.pos + 'Não tem fechamento correspondente')
            break
        case 'CO':
             console.log('Erro: colchete aberto na posição' + info.pos + 'Não tem fechamento correspondente')
            break
        case 'CH':
             console.log('Erro: Chave aberto na posição' + info.pos + 'Não tem fechamento correspondente')
            break             
     }
 }
 console.log(analisador)