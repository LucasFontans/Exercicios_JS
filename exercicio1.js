const prompt = require("utils/prompt")

console.clear()

var num = prompt('Please choose a number: ','number')
    num = num - 1

console.log(`O numero anterior a este é ${num}`)