const lstMP = require('./API/lstMp.json')
const CalculaFormula=  require('./src/calc_formula')

let idElemento = 2
let ArticuloMP ='M000014'
let Porc = 15


var l =  new CalculaFormula()
l.calculaMP(idElemento,ArticuloMP,Porc)

 idElemento = 1
 ArticuloMP ='M000012'
 Porc = 15

l.calculaMP(idElemento,ArticuloMP,Porc,0)

console.log(l.MP)
console.log(l.Result)

