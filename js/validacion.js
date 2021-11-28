let formulario1 = document.forms[0];

/* document.getElementById("area").disabled = false; */
formulario1.addEventListener("change",habilitar)
document.getElementById("boton").addEventListener("click", validar);


document.getElementById("email").addEventListener("keypress", emailMay);
document.getElementById("email").addEventListener("blur",emailminusculas);
document.getElementById("email").addEventListener("blur",validaremail);

document.getElementById("nombre").addEventListener("keydown",validarnombre);
document.getElementById("nombre").addEventListener("blur",validarnombre); 

document.getElementById("apellidos").addEventListener("keypress",validarapellido);
document.getElementById("apellidos").addEventListener("blur",validarapellido);

document.getElementById("telefono").addEventListener("keypress",validartelefono);
document.getElementById("telefono").addEventListener("blur",validartelefono);


/* validar formulario */
function validar(evento){

    if (validarnombre() && validarapellido && validartelefono() &&
        validaremail() && confirm("Deseas mandar los datos del formulario")) {
        return true
    }
    else{
        evento.preventDefault();
        console.log("el formulario no se ha mandado");
        return false;
    }


}



function habilitar(e) {
    if(validarnombre() && validarapellido  && validaremail()){
        console.log("texarea");
        document.getElementById("area").disabled = false;
    }
    
}

/* validar nombre */

function validarnombre(e) {
    let elemento = document.getElementById("nombre");
    console.log(elemento.checkValidity());
    if(!elemento.checkValidity()){
        error(elemento,"errornombre");
        return false;
       
    }
    else{
        borrarerror(elemento,"errornombre");
        return true;
        
    }
}

/* validar apellido */

function validarapellido(e) {

    let elemento = document.getElementById("apellidos");
    console.log(!elemento.checkValidity());
    if(!elemento.checkValidity()){
        error(elemento,"errorapellido"); 
        return false;
       
    }
    else{
        borrarerror(elemento,"errorapellido");
        return true;
        
    }
}

/* validar telefono  */

function validartelefono(e) {

    let elemento = document.getElementById("telefono");
    console.log(!elemento.checkValidity());
    if(!elemento.checkValidity()){
        error(elemento,"errortlf"); 
        return false;
       
    }
    else{
        borrarerror(elemento,"errortlf");
        
        return true;
    }
}


/* pasar a minusculas email en el caso que este activado bloq mayus */
function emailminusculas() {
    let str = document.getElementById("email").value;
    document.getElementById("email").value = str.toLowerCase();
    
}

function validaremail(e) {
    let elemento = document.getElementById("email");
    console.log(!elemento.checkValidity());
    if(!elemento.checkValidity()){
        error(elemento,"erroremail"); 
        document.getElementById("imgform").style.display="none";
        return false;
       
    }
    else{
        
        document.getElementById("imgform").style.display="";
        borrarerror(elemento,"erroremail");
        return true;
    }
}
function emailMay(e) {
    
    emailminusculas();
   
    if(e.shiftKey){

        document.getElementById("erroremail").innerHTML= "No se permiten mayusculas"; 
        alert("No esta permitido mayusculas en le correo") 
          
    }
    else{
        document.getElementById("erroremail").innerHTML= "-";
    }
     
}


/* mensaje error */

function error(elemento,id) {
    document.getElementById(id).innerHTML = elemento.validationMessage;
}


/* borrar mensaje error */
function borrarerror(elemento, mensaje) {
    document.getElementById(mensaje).innerHTML = "-";
}

