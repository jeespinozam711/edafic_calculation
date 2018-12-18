var assert = require('chai')
var calc =  require('../src/calc_element')


let ele_mp = calc(2,15,46)

it('El calculo del elemento principal deberia ser igual a { elemento: 2, porc: 15, cantQQ: 0.32608695652173914 }',() => {
  let result = ele_mp(2,46)
  assert.expect(result.elemento).to.equal(2)
  assert.expect(result.porc).to.equal(15)
  assert.expect(result.cantQQ).to.equal(0.32608695652173914)
})

it('El calculo del segundo elemento deberia ser igual a { elemento: 1, porc: 0.1275992438563327, cantQQ: 0 }',() => {
  let result = ele_mp(1,18)  
  assert.expect(result.elemento).to.equal(1)
  assert.expect(result.porc).to.equal(5.869565217391305)
  assert.expect(result.cantQQ).to.equal(0)
})
