let formulario1 = document.forms[0];

document.getElementById("boton").addEventListener("click", validar);
/* document.getElementById("formContacto").addEventListener("keyup", texarea); */
/* document.getElementById("texarea").addEventListener("input",habilitartexarea); */

document.getElementById("email").addEventListener("keypress", emailMay);
document.getElementById("email").addEventListener("blur",emailminusculas);

document.getElementById("nombre").addEventListener("keydown",validarnombre);
document.getElementById("nombre").addEventListener("blur",validarnombre); 

document.getElementById("apellidos").addEventListener("keypress",validarapellido);
document.getElementById("apellidos").addEventListener("blur",validarapellido);

/* document.getElementById("telefono").addEventListener("keypress",e=>e.alert);
document.getElementById("telefono").addEventListener("keypress",e=>e.alert); */


/* validar formulario */
function validar(evento){

    if (prompt("quieres mandar los daros")) {
        return true
    }
    else{
        evento.preventDefault();
        return false;
}


}

/* validar nombre */

function validarnombre(e) {
    let elemento = document.getElementById("nombre");
    console.log(elemento.checkValidity());
    if(!elemento.checkValidity()){
        error(elemento,"errornombre");
       /*  document.getElementById("errornombre").innerHTML = elemento.validationMessage; */
    }
    else{
        borrarerror(elemento,"errornombre");
        /* document.getElementById("errornombre").innerHTML ="-"; */
    }
}

/* validar apellido */

function validarapellido(e) {

    let elemento = document.getElementById("apellidos");
    console.log(!elemento.checkValidity());
    if(!elemento.checkValidity()){
        error(elemento,"errorapellido"); 
       /* document.getElementById("errorapellido").innerHTML = elemento.validationMessage ;  */
    }
    else{
        borrarerror(elemento,"errorapellido");
        /* document.getElementById("errorapellido").innerHTML ="-"; */
    }
}


/* function error(elemento,id) {
    document.getElementById(id).innerHTML = elemento.validationMessage;

    
} */
let texarea = document.getElementById("texarea");
texarea.style.disable = true;

/* pasar a minusculas email en el caso que este activado bloq mayus */
function emailminusculas() {
    let str = document.getElementById("email").value;
    document.getElementById("email").value = str.toLowerCase();
    texarea.style.disable = true;
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
/* function error(elemento, id) {
    document.getElementById(mensaje).innerHTML = elemento.validationMessage;
} */


/* borrar mensaje error */
function borrarerror(elemento, mensaje) {
    document.getElementById(mensaje).innerHTML = "-";
}

/* function texarea() {
    const inpObj = document.getElementById("formContacto");
    if(inpObj.checkValidity()){
        texarea.style.disable = false;
    }
    else{
        texarea.style.disable = true;
    }
    
} */