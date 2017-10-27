 function usuario (compra){
  this.id =  Math.floor(Math.random() * 1000) +1;
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.compra = compra;
  this.importe = 0;
  this.eliminarCompra = function (){
    if(this.compra.length>0){
      this.compra.pop();
    }else{
      console.log("Tu solicitud es imposible de realizar");
    }
  }
  this.calcularImporte = function(){
  var importefinal = this.compra.reduce(function(total,n){
    return total + n.precio;
  },0);
  this.importe=importecompra;
  }





}
