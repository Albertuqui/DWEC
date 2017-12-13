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
    function setCookie(name,value,days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = ";expires="+date.toGMTString();
      }
      else var expires = "";

      document.cookie = name+"="+value+expires+";path=/";
      console.log(document.cookie);
    }



    var errores = document.getElementsByClassName("errores")[0];
    var errList ="";
    var ret = true;

    //validamos el nombre
    var nom = document.getElementsByName('nombre')[0].value;
    if(nom == null || nom.length==0){
    errList += "El nombre es erróneo <br/>";
      ret = false;
    }

    //validamos apellidos
    var apellidos = document.getElementsByName('apellidos')[0].value;
    if(apellidos == null || apellidos.length==0){
      errList += "El apellido es erróneo <br/>";
      ret = false;
    }

    var email = document.getElementsByName("email")[0].value;
    if ( email == null || email.length==0 ){
      errList += "El email es incorrecto <br/>";
      ret = false;
    }

    var emailrepetido = document.getElementById("emailrepetido").value;
    if(email != emailrepetido){
      errList += "El email repetido debe coincidir con el primer email que introdujo <br/>";
      ret = false;
    }

    var dni = document.getElementsByName("dni")[0].value;
    if (dni==null){
      errList += "El dni es incorrecto <br/>";
      ret = false;
    }

    var fecha = (document.getElementsByName("fecha")[0].value).split('-');
    var anyo=fecha[0];
    var mes=fecha[1];// de 0 a 11
    var dia=fecha[2];// 1 a 31
    console.log(dia + " " + mes + " " + " " + anyo);
    var nf= new Date(anyo,(mes - 1),dia);
    console.log(nf);

    var hoy = new Date();
    //resto los años de las dos fechas
    var edad = hoy.getFullYear()- anyo - 1; //-1 porque no se si ha cumplido años ya este año
    //si resto los meses y me da mayor que 0, ha cumplido años
    if (hoy.getMonth() + 1 - mes > 0){
        edad++;
    }
    //si resto los dias y me da menor que 0 entonces no ha cumplido años.
    //si da mayor o igual si ha cumplido
    if (hoy.getUTCDate() - dia >= 0){
        edad++;
    }
    console.log("Edad " + edad);
    if ( isNaN(nf) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anyo < 0 || anyo >= hoy.getFullYear()){
      errList += "La fecha es errónea <br/>"
      ret = false;
    }else if (edad < 18){
      errList += "Para realizar este formulario debe ser mayor de edad <br/>"
      ret = false;
    }

    var seccion = document.getElementsByName("seccion")[0].selectedIndex;
    if (seccion == null || seccion == 0){
        errList += "Escoja una seccion <br/>";
        ret = false;
    }


    var escogerpago = formulario.pago.value;
    if (escogerpago != "efectivo" && escogerpago != "tarjeta"){
      ret = false;
      errList += "Es necesario que indique el método de pago que desea<br/>";
    }

    if(!cond.checked){
      ret=false;
  errList += "Es necesario que acepte las condiciones<br/>";
    }


    if (ret){
      //Empieza el tema de almacenamiento
      nombre = document.getElementsByTagName("input")[0];
     var name= "nombre";
     var value = nombre.value;
     var days= 360;
     setCookie(name,value,days);

    apellidos = document.getElementsByTagName("input")[1];
    var name1= "apellidos";
    var value1 = apellidos.value;
    var days1= 360;
    setCookie(name1,value1,days1);

  correo = document.getElementsByTagName("input")[2].value;
 localStorage.setItem("Email",correo);

 dni = document.getElementsByTagName("input")[4].value;
 sessionStorage.setItem("DNI",dni),
 //acaba el tema de almacenamiento

    boton =   document.getElementById("enviar");
    boton.value = "Enviando...";
      boton.disabled = true;
   errList += "Tu petición se ha enviado correctamente";
     errores.style.color="blue";
   }else{
     errores.style.color="red";
   }

   errores.innerHTML =  errList;
   return ret;







}
}
