let formulario1 = document.forms[0];

document.getElementById("boton").addEventListener("click", validar);


function validar(evento){

if (prompt("quieres mandar los daros")) {
    return true
}
else{
    evento.preventDefault();
     return false;
}

}
