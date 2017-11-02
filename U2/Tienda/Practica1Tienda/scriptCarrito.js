
if(navigator.cookieEnabled==false){
   alert("No has habilitado las cookies");
 }

var usuario1 = new Usuario(compra);

usuario1.mostrarCompra();
usuario1.calcularImporte();
cuerpo.innerHTML += "<b> Precio: " + (usuario1.importe).toFixed(2) + "€" + "</b>";

function eliminar(){
  usuario1.eliminarCompra();
  usuario1.mostrarCompra();
  usuario1.calcularImporte();
cuerpo.innerHTML += "<b> Precio: " + (usuario1.importe).toFixed(2) + "€" + "</b>";
}

function hacerPedido(){
  if (usuario1.compra.length>0) {
        var response = confirm("¿Aceptas las condiciones de pago?");
        if(response) {
          var v = window.open("","","");
          v.location.assign("pedidoOK.html");
        }
         else {
            alert("No has aceptado las condiciones. No puedes hacer el pedido.");
        }
    }
  else{
    alert("No puedes realizar pedidos porque no hay productos");
  }
}

function condCompraOnline(){
  var v = window.open("", "", "toolbar=yes,scrollbars=yes,resizable=no,top=500,left=500,width=350,height=550");
  v.document.write('<html><head><title>Condiciones</title></head><h1>Condiciones de compra</h1><h2> Horario </h2> <h5>  Dispone de 24 horas al día 365 días al año para hacer su compra, desde cualquier ordenador con acceso a Internet cumpliendo los requisitos técnicos especificados.</h5> <h2> Preparación de mi compra</h2> <h5> En caso de no disponibilidad de algún producto, seguiremos las preferencias que usted nos haya indicado en la ficha de cliente (sustituir por similar o no servir). No se sustituirá un producto similar cuando el importe sea mayor al del producto solicitado. Le recomendamos consultar el detalle que necesite conocer del producto entregado.</h5><button onclick="window.close()" type="button" name="button">Cerrar</button><div><body>');
   v.moveTo(200,100);

}

function Inicio(){
location.replace("home.html");
}

function imprimir(){
  window.print();
}
