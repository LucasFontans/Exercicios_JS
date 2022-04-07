//
// Name: Módulo Prompt
// Description: Função para ler o prompt e retornar valor
// Author: Prof. Elmário Dutra
// Version: 2021.03.08
//
const util = require("../utils/util")

module.exports = function prompt(message, returnedType) {
    const prompt = require('prompt-sync')()
    const p = prompt(message)

    switch (returnedType) {
        case "arrayofstr":
            result = util.strtoarray(p, "String")
            break;
        case "arrayofnumber":
            result = util.strtoarray(p, "Number")
            break;
        case "number":
            result = util.strtonum(p)
            break;
        default:
            result = p
            break;
    }

    return result
}