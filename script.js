function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}
function textos(){
    document.getElementById("textuno").innerHTML="cambio"
    document.getElementById("textdos").innerHTML="cambio"
    document.getElementById("texttres").innerHTML="cambio"
}
function verificarN(){
    const numero = document.getElementById("numero").value;
    if (numero>10){
        document.getElementById("resultado").innerHTML="Es mayor"
    }else{
        document.getElementById("resultado").innerHTML="Es menor"    
    }
}
var usuario={
    nombre:"Santi",
    edad:20,
    correo:"santi@gmail.com"
}
function miobjeto(){
   
    document.getElementById("datos").innerHTML=`nombre:${usuario.nombre},
    edad:${usuario.edad}, correo:${usuario.correo}`
    
}
function lista(){
    var notas = ["Miguel","Daniel","Santiago","Paula",usuario.nombre];
    for(var i=0;i<notas.length;i++){
        document.getElementById("la-lista").innerHTML+=`<li>${notas[i]}</li>`
    }
}