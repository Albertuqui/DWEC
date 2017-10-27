var p = new Surtido(productos);
//var micompra = [productos[0], productos[3]];
p.dibujarSurtido();

function recarga(){

}

function verPorPrecioMas(p){
  p.ordenPrecioMas();
  p.dibujarSurtido();
}

function verPorPrecioMenos(p){
  p.ordenPrecioMenos();
  p.dibujarSurtido();
}
function verVegano(){
  var v= p.filtrarVegano();
  p.dibujarSurtido(v);
}
