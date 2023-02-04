//estilos automaticos

const lacapa = document.querySelector("#micapa");
lacapa.innerText = "esto es solo un texto";

//css dinamico

/*lacapa.style = "background-color: cyan";
lacapa.style = "color: white ";
lacapa.style = "border-style: solid";*/

lacapa.setAttribute(
    "style",
    "background-color: blue; color: white; border-style: solid"
);