const texto = document.createTextNode("esto solo es texto");
//algunos metodos del nodo texto
//split text

/*let porcionTexto = texto.splitText(5);
//console.log(texto);*/

//console.log(porcionTexto);

texto.appendData(" que nadie espera entender");
//console.log(texto);
texto.insertData(12, " un simple y breve");

//texto.replaceData(0, 12, "esperemos cuando llegue");
texto.substringData(0, 12);

document.body.appendChild(texto);