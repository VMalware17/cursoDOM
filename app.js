const capa = document.querySelector("#micapa");
const imagen = document.querySelector("#laimagen");

//console.log(capa);
//console.log(imagen);
//obtiene en un arreglo los nombres de los atributos del element

console.log(capa.getAttributeNames());
console.log(imagen.getAttributeNames());

//otros usos

console.log(imagen.src);
console.log(imagen.srcset);

//manipulando los atributos del elemento con el DOM

const parrafo = document.querySelector("p");
//le agregamos al parrafo un atributo id y le pasamos el valor parrafo especial
parrafo.setAttribute("id", "parrafoEspecial");
parrafo.setAttribute("class", "claseParrafo");
console.log(parrafo.getAttributeNames());

//estudio de otros atributos

//console.log(imagen.clientHeight);
console.log(imagen.clientWidth);