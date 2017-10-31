 if(navigator.cookieEnabled=="false"){
   alert("No has habilitado las cookies");
 }

usuario1 = new Usuario(productos);

usuario1.calcularImporte();
usuario1.mostrarCompra();

function eliminar(){
  usuario1.eliminar();
}

function hacerPedido(){
  if (productos>0) {
    function Confirmar() {
        var response = confirm("Do you want more money?");
        if(response) {
            console.log("Get a better job");
        } else {
            console.log("Are you sure? OK...");
        }
    }
    var v = window.open("","","height=200,width=200");
    v.location.assign("pedidoOK.html");

  }
}
