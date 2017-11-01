 if(navigator.cookieEnabled==false){
   alert("No has habilitado las cookies");
 }

usuario1 = new Usuario(productos);

usuario1.calcularImporte();
usuario1.mostrarCompra();

function eliminar(){
  usuario1.eliminar();
}

function hacerPedido(productos){
  if (productos>0) {
        var response = confirm("¿Aceptas las condiciones de pago?");
        if(response) {
          var v = window.open("","","height=200,width=200");
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
