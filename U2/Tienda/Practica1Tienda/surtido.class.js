function Surtido(productos){
  this.productos=productos;
  this.ordenPrecioMas = function (){
  this.productos.sort(function(p1,p2){
      return p1.precio-p2.precio;
    });
  }

}
