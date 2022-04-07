const prompt = require("utils/prompt")

console.clear()

function percentil(valor, perc){
    return perc/100*valor
}
var carPrice = prompt("Qual o valor do carro? ","number")

var imposto = percentil(carPrice, 45)
var distributor = percentil(carPrice, 28)

console.log(`O valor total do carro incluindo imposto e do distribuidor é ${carPrice + imposto + distributor}.`)
