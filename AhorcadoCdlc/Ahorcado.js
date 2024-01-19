const palabra = ["jamon", "pollo"];
const abcdario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";

function lienzo(){
    
    var canvas = document.getElementById('micanvas');
    var contexto = canvas.getContext("2d");
    contexto.moveTo(50, 150);
    contexto.lineTo(180, 180);
    contexto.strokeStyle = "#f00";
    contexto.stroke();
    contexto.moveTo(90, 190);
    contexto.lineTo(140, 120);
    contexto.strokeStyle = "BLACK";
    contexto.stroke();
}

function inicio(){
    pElegida = palabra[Math.floor(Math.random() * palabra.length)];
    letrasCorrectas = [];
    vidas = 7
}

