module.exports = function CalcElement(elePrincipal, porcPrincipal,concentracionPrincipal){  
  function calcula(elemento,concentracion){
    result ={}
    if (elemento == elePrincipal ){
      result = {
        'elemento': elemento,
        'porc': porcPrincipal,
        'cantQQ': porcPrincipal / concentracion
      }
    } else {
      result = {
        'elemento': elemento,
        'porc': ((porcPrincipal/concentracionPrincipal) * concentracion) ,
        'cantQQ': 0
      }
    }

    return result
  }

  return calcula

}