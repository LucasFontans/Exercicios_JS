const prompt = require("utils/prompt")

console.clear()

function percentil(valor1, valor2){
    var percentual = valor1 - valor2
    return percentual/valor2*100
}

var salario = prompt("Qual o seu salário? ", "number")
var reajuste = prompt("Qual foi seu reajuste? ", "number")

var total = percentil(reajuste, salario)
console.log(`Você teve reajuste de ${total}%.`)