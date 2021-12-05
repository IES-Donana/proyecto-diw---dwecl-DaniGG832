/* <nav id="menu-hamburguesa">
      <ul id="enlaces-hamburguesa">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="Sobre-mi.html">Sobre Mi</a></li>
        <li><a href="mis-proyectos.html">Mis Proyectos</a></li>
        <li><a href="testimonios.html">Testimonios</a></li>
        <li><a href="curriculum.html">Curriculum</a></li>
        <li><a href="redes-sociales.html">Redes Sociales</a></li>
        <li><a href="contacto.html">Contacto</a></li>
      </ul>
    </nav> */

/* seleccionamos el icono de la hamburguesa para realizar el evento */
let menu = document.querySelector("#hamburguesa");
menu.addEventListener("click", menuHamburguersa);

/* variables que hacen referencia al DOM  */
let imgLogo = document.querySelector("#hamburguesa>img")
let div = document.querySelector("#hamburguesa");
let header = document.querySelector("header");

/* funcion que despliega el menu hamburguesa */
function menuHamburguersa(e) {

    console.log(nav.isConnected);
    if (!nav.isConnected) {

        div.insertAdjacentElement("beforebegin", nav);
        imgLogo.setAttribute("src", "img/xx-hambu.png");
        nav.classList.toggle("quitar");
 
    }
    else {
        
        /*  nav.remove(); */
        imgLogo.setAttribute("src", "img/menu-hamburguesa2.png");
        nav.classList.toggle("quitar");
        menu.removeEventListener("click", menuHamburguersa);
        setTimeout(()=>{nav.remove();
            menu.addEventListener("click", menuHamburguersa);
            }, 1200);
        
    }

}

/* variables con los nodos de texto, el atributo href, etiquetas li y a  */
let textHref = ["index.html", "Sobre-mi.html", "mis-proyectos.html", "testimonios.html", "curriculum.html",
    "redes-sociales.html", "contacto.html"];
let textli = "li";
let textA = "a";
let nodoText = ["Inicio", "Sobre Mi", "Mis Proyectos", "Testimonios", "Curriculum",
    "Redes Sociales", "Contacto"];


/* creamos los elementos del menu y creamos la estructura */
let nav = document.createElement("nav");
nav.setAttribute("id", "menu-hamburguesa");
nav.setAttribute("class", "quitar");

let ul = document.createElement("ul");
ul.setAttribute("id", "enlaces-hamburguesa");


for (const i in textHref) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", textHref[i]);
    let text = document.createTextNode(nodoText[i]);
    a.appendChild(text);
    li.appendChild(a);
    ul.appendChild(li);


}


nav.appendChild(ul);
console.log(nav);




