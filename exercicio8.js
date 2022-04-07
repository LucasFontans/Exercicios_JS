const prompt = require("utils/prompt")

console.clear()

function conversion(f){
    return (f-32)*5/9
}

var fahrenheit = prompt("Quantos graus está fazendo? " , "number")

var celcius = conversion(fahrenheit)

console.log(`A conversão em graus Celcius é de ${celcius}`)