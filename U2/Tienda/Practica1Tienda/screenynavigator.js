'use strict';

function showAlert() {
    alert("Hello!, I'm an alert message.");
    console.log("Alert was closed");
}

function showConfirm() {
  var response = confirm("¿Aceptas las condiciones de pago?");
  if(response) {
    var v = window.open("","","");
    v.location.assign("pedidoOK.html");
  }
   else {
      alert("No has aceptado las condiciones. No puedes hacer el pedido.");
  }
}

function showPrompt() {
    var response = prompt("What's your name", "Elvis");

    if(response) {
        console.log("Your name is " + response);
    } else {
        console.log("Tell me your name!!");
    }
}


function hola(){
window.print();
}
