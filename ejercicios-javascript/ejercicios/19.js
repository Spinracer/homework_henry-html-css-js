function esPositivo(num) {
  // La función recibe un entero. Devuelve como resultado un string que indica si el número
  // es positivo o negativo.
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, d
  if (num > 0) {
    return "ES POSITIVO"; 
  } 
  else {
    return " ES NEGATIVO";
  }
}
console.log(esPositivo(-7));
module.exports = esPositivo;