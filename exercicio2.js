const prompt = require("utils/prompt")

console.clear

var altura = prompt("Qual a altura do retangulo? " ,"number")
var largura = prompt("Qual a largura do retangulo? ","number")
var area = altura * largura

console.log(`A area do retangulo é ${area}`)

