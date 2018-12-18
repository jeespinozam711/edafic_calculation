var _ = require('underscore');
const lstMP = require('../API/lstMp.json')
const lstElementos = require('../API/lstElementos.json')

function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}
function joinTables(left, right, leftKey, rightKey) {

  rightKey = rightKey || leftKey;

  var lookupTable = {};
  var resultTable = [];
  var forEachLeftRecord = function (currentRecord) {
      lookupTable[currentRecord[leftKey]] = currentRecord;
  };

  var forEachRightRecord = function (currentRecord) {
      var joinedRecord = _.clone(lookupTable[currentRecord[rightKey]]); // using lodash clone
      _.extend(joinedRecord, currentRecord); // using lodash extend
      resultTable.push(joinedRecord);
  };

  left.forEach(forEachLeftRecord);
  right.forEach(forEachRightRecord);

  return resultTable;
}
module.exports = function GetName(listado){
  let nombre  =''
  let lstNPK = ['N','P','K']

  let listadoCompleto = joinTables(lstElementos,listado,'IdElemento','IDElemento')

  lstNPK.forEach(item => {
    let elemento = listadoCompleto.find(x=>{return x.DescrCorta == item})
    if (elemento){
      nombre += round(elemento.Porc,2) + elemento.DescrCorta + ' - '
    } else 
      nombre += '0' + item + ' - '
  })


  listadoCompleto.filter(a=> !lstNPK.includes(a.DescrCorta) ).sort((a,b)=>{return a.Prioridad-b.Prioridad}).map((item)=>{
    
     let elemento = lstElementos.find(x=>{return x.IdElemento == item.IDElemento})
     nombre += round(item.Porc,2) +  elemento.DescrCorta + ' - '
    
  })
  nombre = nombre.substr(0,nombre.length-2)
  return  nombre
  
}