const textoOcultar = document.querySelector("#titulo");

function verPalabras() {
  const regex = /[A-Q]|[\xC0-\xCF]/g;
  let input = document.getElementById("texto").value;
  if (regex.test(input)) {
    alert("NO se puede usar mayusculas ni caracteres especiales!");
  } else {
    let convertidor = input.replace(/(e)/g, "enter");
    convertidor = convertidor.replace(/i/g, "imes");
    convertidor = convertidor.replace(/u/g, "ufat");
    convertidor = convertidor.replace(/o/g, "ober");
    convertidor = convertidor.replace(/a/g, "ai");
    textoOcultar.classList.add("ocultar");
    asignarTextoElemento("textoCopiar", convertidor);
  }
  /* let lista = input.split("");
  for (let i = 0; i < lista.length; i++) {
    switch (lista[i]) {
      case "a":
        lista[i] = lista[i].replace("a", "ai");
        break;
      case "e":
        lista[i] = lista[i].replace("e", "enter");
        break;
      case "i":
        lista[i] = lista[i].replace("i", "imes");
        break;
      case "o":
        lista[i] = lista[i].replace("o", "ober");
        break;
      case "u":
        lista[i] = lista[i].replace("u", "ufat");
        break;
      default:
        lista[i] = lista[i];
        break;
    }
  }
  asignarTextoElemento("textoCopiar", lista.join(""));
  return lista.join(""); */
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.getElementById(elemento);
  elementoHTML.innerHTML = texto;
}

function desencriptador() {
  let texto = document.getElementById("texto").value;
  const regex = /[A-Q]|[\xC0-\xCF]/g;
  if (regex.test(texto)) {
    alert("NO se puede usar mayusculas ni caracteres especiales!")
  }else{   
    let convertidor = texto.replace(/(enter)/g, "e");
    convertidor = convertidor.replace(/imes/g, "i");
    convertidor = convertidor.replace(/ufat/g, "u");
    convertidor = convertidor.replace(/ober/g, "o");
    convertidor = convertidor.replace(/ai/g, "a");
    textoOcultar.classList.add("ocultar");
    asignarTextoElemento("textoCopiar", convertidor);
  }
}

function copiarTexto() {
  let texto = document.getElementById("textoCopiar");
  let boton = document.getElementById("botonCopiar");

  navigator.clipboard.writeText(texto.textContent);
  boton.textContent = "Copiado";
}
