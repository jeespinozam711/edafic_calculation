var assert = require('chai')
const lstMP = require('../API/lstMp.json')
const CalculaMP =  require('../src/calc_mp')

let idElemento = 2
let ArticuloMP ='M000014'
let Porc = 10
let Valores = []

Valores = CalculaMP(lstMP,idElemento,ArticuloMP,Porc)

it ('El calculo de la materia prima debe ser igual a .. ',() => {
  assert.expect(Valores).to.deep.equal([ { elemento: 1, porc: 0.08506616257088848, cantQQ: 0 },
    { elemento: 2, porc: 10, cantQQ: 0.21739130434782608 } ])
})
