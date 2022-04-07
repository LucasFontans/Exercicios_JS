const prompt = require("utils/prompt")

console.clear()
function percentil(valor, total){
    return valor/total*100
}

var eleitores = prompt("Quantos eleitore são? ","number")
var branco = prompt("Qauntos votaram em branco? ","number")
var nulo = prompt("Quantos são nulos ","number")
var validos = prompt("Quantos são Validos? ","number")

var branco = percentil(branco, eleitores)
console.log(`${branco}% dos votos foram em branco.`)
var nulo = percentil(nulo, eleitores)
console.log(`${nulo}% dos votos foram nulos.`)
var validos = percentil(validos, eleitores)
console.log(`${validos}% dos votos foram validos`) 