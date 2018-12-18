const calcMP = require('./calc_mp')
const lstMP = require('../API/lstMp.json')

function CalcFormula(){
  this.Result = []
  this.MP = []

  this.calculaMP =  function(IDElemento,Articulo,Porc,Aporta=true) {
    if (!Aporta){
     let index = this.MP.indexOf(this.MP.find(x=> x.IDElemento==IDElemento))
     Porc -= (index!=-1) ? this.MP[index].Porc : 0
    }
    let calculoMP = calcMP(lstMP,IDElemento,Articulo,Porc)
    //buscar el elemento en result 
    

    calculoMP.map((item) => { 
      var index = this.MP.indexOf(this.MP.find(x => x.IDElemento == item.elemento));

      if (index==-1)
      {
        //insertamos
        mat = {
          'IDElemento' : item.elemento,
          'Porc': item.porc,
          'CantQQ': item.cantQQ, //IDElemento )calculoMP.reduce(function (valorAnt,valorAct){return valorAnt + valorAct.cantQQ},0),
          'lstMP':[]
        }
        mat.lstMP.push(item)
        this.MP.push(mat)

      } else {
        this.MP[index].CantQQ += item.cantQQ, 
        this.MP[index].Porc = item.porc + this.MP[index].Porc,//calculoMP.reduce(function (valorAnt,valorAct){return valorAnt + valorAct.cantQQ},0),
        this.MP[index].lstMP.push(item)
      }  

      if (item.cantQQ>0)
      {
        this.Result.push(item)
      }
    })

  }
}

module.exports = CalcFormula