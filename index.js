function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muchacho = document.getElementById("muchacho");

    let textoCifrado = texto
                        .replace(/e/gi, "estrqwes")
                        .replace(/i/gi, "imosoqnr")
                        .replace(/a/gi, "aopkerw")
                        .replace(/o/gi, "oberiusd")
                        .replace(/u/gi, "ufarsmxd");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muchacho.src = "./imagenes/encriptado.jpg";
    } else {
        muchacho.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Ooops!", "Debes ingresar un texto", "warning");
    }
}

function Desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muchacho = document.getElementById("muchacho");

    let textoCifrado = texto
                            .replace(/estrqwes/gi, "e")
                            .replace(/imosoqnr/gi, "i")
                            .replace(/aopkerw/gi, "a")
                            .replace(/oberiusd/gi, "o")
                            .replace(/ufarsmxd/gi, "u");
    
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muchacho.src = "./imagenes/desencriptado.jpg";
    } else {
        muchacho.src = "./imagenes/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
    }
}