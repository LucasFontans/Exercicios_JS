    const prompt = require("utils/prompt")

console.clear()

function commission(valor, perc){
    return perc/100*valor
}

var salario = prompt("Qual é o seu salario fixo? ","number")

let ncars = 0
let totalvalue = 0
let finish = false
while(!finish) {
    console.log("Digite -1 para sair")
    var price = prompt('Digite valor do vículo: ','number')
    if (price == -1) finish = true
    else {
        ncars++
        totalvalue += price
    }
}

console.log(`O total de carros que você vendeu foi: ${ncars}`)
console.log(`O valor total das suas vendas foram: ${totalvalue}`)

var commissiontotal = commission(totalvalue, 5)

console.log(`O valor total da sua comissão somado com seu salario foi de ${commissiontotal + salario}.`)