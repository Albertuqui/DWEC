var p = new Surtido(productos);
//var micompra = [productos[0], productos[3]];
p.dibujarSurtido();


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

function recarga(){
location.reload();
}

function condCompraOnline(){
    var v = window.open("", "", "toolbar=yes,scrollbars=yes,resizable=no,top=500,left=500,width=350,height=550");
    v.document.write('<html><head><title>Condiciones</title></head><h1>Condiciones de compra</h1><h2> Horario </h2> <h5>  Dispone de 24 horas al día 365 días al año para hacer su compra, desde cualquier ordenador con acceso a Internet cumpliendo los requisitos técnicos especificados.</h5> <h2> Preparación de mi compra</h2> <h5> En caso de no disponibilidad de algún producto, seguiremos las preferencias que usted nos haya indicado en la ficha de cliente (sustituir por similar o no servir). No se sustituirá un producto similar cuando el importe sea mayor al del producto solicitado. Le recomendamos consultar el detalle que necesite conocer del producto entregado.</h5><button onclick="window.close()" type="button" name="button">Cerrar</button><div><body>');
     v.moveTo(200,100);
}

function navegarCarrito(){
  location.replace("carrito.html");
}
