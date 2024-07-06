function encriptar() {
   let inputText = document.getElementById('inputtext').value;
   if (validarInput(inputText)) {
       let encriptadotexto = encriptadorText(inputText);
       outputResultado(encriptadotexto);
       eliminardisabled();
   } else {
       alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
   }
}

const eliminardisabled = () => {
   document.getElementById('copytext').removeAttribute('disabled');
   return;
}

function desencriptar() {
   let inputText = document.getElementById('inputtext').value;
   if (validarInput(inputText)) {
       let desencriptadotexto = desencriptadorText(inputText);
       outputResultado(desencriptadotexto);
       eliminardisabled();
   } else {
       alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
   }
}

function validarInput(text) {
   const letras = /^[a-z\s]+$/;
   return letras.test(text);
}

function encriptadorText(text) {
   return text
   .replace(/e/g, "enter")
   .replace(/i/g, "imes")
   .replace(/a/g, "ai")
   .replace(/o/g, "ober")
   .replace(/u/g, "ufat");
}

function desencriptadorText(text) {
    return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
}

function outputResultado(text) {
   document.getElementById("output-title").innerText = text
   ? "Resultado:"
   : "Ningún mensaje fue encontrado";
   document.getElementById("output-text").innerText = text || "Ingresa el texto que quieras encriptar o desencriptar.";
}

document.getElementById('copytext').addEventListener('click', () => {
   const resultadoout = document.getElementById('output-text').innerText;
   
   navigator.clipboard.writeText(resultadoout).then(() => {
       alert("Texto copiado al portapapeles");
   }).catch(err => {
       console.error("Error al copiar el texto: ", err);
   });
});
