//pagina 9 del ejemplo del documento soporte//

//creando una capa//

const lacapa = document.createElement("div");
//innertext es texto plano, innerHTML es HTML puro//
lacapa.innerHTML = "<h1>Lista de frutas</h1>";
const elparrafo = document.createElement("p");
elparrafo.innerText = "";
const laimagen = document.createElement("img");
//laimagen.src = "logo-anyrun.png";
//agregamos la imagen a su nodo contenedor o nodo superior = lacapa//
lacapa.appendChild(elparrafo);

//lo agregamos TODO al nodo superior - body (dentro de div)//
document.body.appendChild(lacapa);

//========================================================///

const lalista = document.createElement("ul");
const l1 = document.createElement("li");
const l2 = document.createElement("li");
const l3 = document.createElement("li");
const l4 = document.createElement("li");
const l5 = document.createElement("li");
l1.innerText = "Manzana";
l2.innerText = "Guanabana";
l3.innerText = "Mandarina";
l4.innerText = "Naranja";
l5.innertext = "pera";

lalista.appendChild(l1);
lalista.appendChild(l2);
lalista.appendChild(l3);
lalista.appendChild(l4);
lalista.appendChild(l5);