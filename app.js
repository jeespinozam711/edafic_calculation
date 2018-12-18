const lstMP = require('./API/lstMp.json')
const CalculaFormula=  require('./src/calc_formula')
const GetName  = require('./src/get_name')

let idElemento = 2
let ArticuloMP ='M000014'
let Porc = 15


var l =  new CalculaFormula()
l.calculaMP(idElemento,ArticuloMP,Porc)



idElemento = 4
ArticuloMP ='FE00327'
Porc = 2


l.calculaMP(idElemento,ArticuloMP,Porc)


idElemento = 4
ArticuloMP ='FE00115'
Porc = 2


l.calculaMP(idElemento,ArticuloMP,Porc)


idElemento = 6
ArticuloMP ='M000104'
Porc = 2


l.calculaMP(idElemento,ArticuloMP,Porc,0)


idElemento = 1
ArticuloMP ='M000012'
Porc = 15

l.calculaMP(idElemento,ArticuloMP,Porc,0)


 console.log(l.MP)
 console.log(l.Result)

console.log(GetName(l.MP))

