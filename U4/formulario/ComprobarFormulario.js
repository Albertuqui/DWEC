onload = function(){
       //Asociamos la función ponFoco a los dos input
       function ponFoco(e){
         e.target.style.outline = "purple solid 2px";
       }
       function quitarFoco(e){
         e.target.style.outline="none";
       }

       //cojo todos los inputs
       inputs = document.querySelectorAll("input");

       for (var i = 0; i < inputs.length; i++) {
         select = document.querySelector("select");
         inputs[i].addEventListener("focus",ponFoco);
         select.addEventListener("focus",ponFoco);
       }
       //para que cuando se quite el foco del anterior.
       for (var i = 0; i < inputs.length; i++) {
         select = document.querySelector("select");
         inputs[i].addEventListener("blur",quitarFoco);
         select.addEventListener("blur",quitarFoco);
       }




  var formulario = document.forms[0];
  formulario.onsubmit =function(){
    var errores = document.getElementsByClassName("errores")[0];
    var errList ="";
    var ret = true;

    //validamos el nombre
    var nom = document.getElementsByName('nombre')[0].value;
    if(nom == null || nom.length==0 || !(/^\S+$/.test(nom))){
    errList += "El nombre es erróneo <br/>";
      ret = false;
    }

    //validamos apellidos
    var apellidos = document.getElementsByName('apellidos')[0].value;
    if(apellidos == null || apellidos.length==0 || !(/^\S+[\s?\S+]*$/.test(apellidos))){
      errList += "El apellido es erróneo <br/>";
      ret = false;
    }

    if (ret){
     //Si estamos aquí es que no ha habido ningún problema
   errList += "Tu petición se ha enviado correctamente";
   console.log(errList);
     errores.style.color="blue";
   }else{
     errores.style.color="red";
   }

   errores.innerHTML =  errList;
   return ret; //Si ha habido problema, ret será false y evitaremos el envío. Si fuera true se enviaría.
}
}
