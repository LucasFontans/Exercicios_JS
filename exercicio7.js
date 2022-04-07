const prompt = require("utils/prompt")

console.clear()

function commission(valor, perc){
    return perc/100*valor
}

var salario = prompt("Qual é o seu salario fixo? ","number")
var selledcars = prompt("Quantos carros foram vendidos? ","number")
var valuetotal = prompt("Quantos R$ em carros vendido você fez? ","number")

var commissiontotal = commission(valuetotal, 5)
console.log(`Você vendeu ${selledcars} carro(s) o valor total das vendas foi ${valuetotal} sua comissão é de ${commissiontotal} esse valor somado com seu salário é de R$${salario + commissiontotal}.`)