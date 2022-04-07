const prompt = require("utils/prompt")

console.clear

var anos = prompt("Qual sua anos você tem? ", "number")
var meses = prompt("Quantos meses você viveu? ","number")
var dias = prompt("Quantos dias a mais você viveu? ","number")

var anos = anos*365
var meses = meses*30

var total = dias + anos + meses

console.log(`Você viveu por ${total} dias.`)