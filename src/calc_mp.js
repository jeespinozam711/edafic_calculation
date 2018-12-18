const calcElemento =  require('./calc_element')

module.exports = function CalculaMP(lstMp, IDElemento, MP, Porc){

  let ElementosQuimicos = lstMp.filter((item)=>{ return item.Articulo == MP})
  let ElementoPrincipal = ElementosQuimicos.filter((item)=>{ return item.IdElemento == IDElemento})
  
  let valores = []
  let CalculoElemento =  calcElemento(ElementoPrincipal[0].IdElemento,Porc,ElementoPrincipal[0].Concetracion)

  ElementosQuimicos.map((item)=>{
    
    let result = CalculoElemento(item.IdElemento,item.Concetracion)
      valores.push(result)
  })

  return valores

}