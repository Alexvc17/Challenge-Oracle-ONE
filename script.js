const mensajeEntrada = document.querySelector(".mensaje-entrada");
const mensajeSalida = document.querySelector(".mensaje-salida");
const botonEncriptar = document.querySelector(".encriptar");


function validarEntrada() {
  const mensaje = mensajeEntrada.value;
  const mensajeSinAcentos = mensaje.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const mensajeSinCaracteresEspeciales = mensajeSinAcentos.replace(/[^\w\s]/g, "");

  mensajeEntrada.value = mensajeSinCaracteresEspeciales.toLowerCase();
}


function btnEncriptar() {

  validarEntrada();

  const msje = mensajeEntrada.value.toLowerCase();

  /*
  const textoIngresado = msje;
  console.log(textoIngresado);
  mensajeSalida.value = textoIngresado;*/

  const mensajeEncriptado = msje
    .replace(/e/igm, "enter")
    .replace(/o/igm, "ober")
    .replace(/i/igm, "imes")
    .replace(/a/igm, "ai")
    .replace(/u/igm, "ufat");

   mensajeSalida.value = mensajeEncriptado;
   mensajeEntrada.value = "";
   
}


function btnDesencriptar() {


    const mensajeDesencriptado = mensajeEntrada.value
    .replace(/enter/igm, "e")
    .replace(/ober/igm, "o")
    .replace(/imes/igm, "i")
    .replace(/ai/igm, "a")
    .replace(/ufat/igm, "u");


	mensajeSalida.value = mensajeDesencriptado;
	

}



function btnCopiar(){

	const mensajeCopiado = mensajeSalida.value;
	mensajeEntrada.value = mensajeCopiado;
	
}