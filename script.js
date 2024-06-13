// FUNCION QUE ME APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LA PREVIAMENTE SELECCIONADO
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    // HACEMOS DESAPARECER EL MENU UNA VEZ QUE SE HA SELECCIONADO UNA OPCION EN EL MODO RESPONSIVE
    var x = document.getElementById("nav");
    x.className = "";

}

// FUNCION QUE MUESTRA EL MENU RESPONSIVE
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRA DE HABILIDADES
window.onscroll = function() {
    efectoHabilidades()
};

//FUNCION QUE APLICA LA ANIMACION DE LA BARRA DE HABILIDADES
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("git").classList.add("barra-progreso3");
        document.getElementById("react").classList.add("barra-progreso4");
        document.getElementById("node").classList.add("barra-progreso5");
        document.getElementById("php").classList.add("barra-progreso6");
        document.getElementById("laravel").classList.add("barra-progreso7");
        document.getElementById("bd").classList.add("barra-progreso8");
    }
}