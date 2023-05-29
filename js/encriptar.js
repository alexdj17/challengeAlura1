function encriptar(){
    var texto = document.querySelector("#solicitud").value
    if(texto.length > 0){
        document.querySelector(".no-cont").style.display = "none";
        document.querySelector(".cont").style.display = "block";
        texto = texto.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("a","ai").replaceAll("u","ufat");
        document.querySelector("p.salida").innerHTML = texto
    }
    else {
        document.querySelector(".no-cont").style.display = "block";
        document.querySelector(".cont").style.display = "none";
    }

}

function desencriptar(){
    var texto = document.querySelector("#solicitud").value
    if(texto.length > 0){
        document.querySelector(".no-cont").style.display = "none";
        document.querySelector(".cont").style.display = "block";
        texto = texto.replaceAll("ufat","u").replaceAll("ai","a").replaceAll("ober","o").replaceAll("imes","i").replaceAll("enter","e");
        document.querySelector("p.salida").innerHTML = texto
    }
    else {
        document.querySelector(".no-cont").style.display = "block";
        document.querySelector(".cont").style.display = "none";
    }

}

function copiar() {
    var texto = document.querySelector("p.salida").innerHTML; 
    navigator.clipboard.writeText(texto);
}

document.querySelector("#encriptar").onclick = encriptar
document.querySelector("#desencriptar").onclick = desencriptar
document.querySelector("#copiar").onclick = copiar