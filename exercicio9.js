const prompt = require("utils/prompt")

console.clear()

function notas(n1, n2, n3){
    return (n1*2+n2*3+n3*5)/10
}

var note1 = prompt("Qual é a valor da primeira nota? ","number")
var note2 = prompt("Qual é a valor da segunda nota? ","number")
var note3 = prompt("Qual é a valor da terceira nota? ","number")



var total = notas(note1, note2, note3)

if(total >=6){console.log(`O aluno foi aprovado com média de ${total}`)}else{console.log(`O aluno foi reprovado, sua nota foi de ${total}`)}