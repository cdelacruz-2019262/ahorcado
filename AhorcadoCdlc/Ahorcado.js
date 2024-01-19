function lienzo(){
    var canvas = document.getElementById('micanvas');
    var contexto = canvas.getContext("2d");
    contexto.moveTo(50, 150);
    contexto.lineTo(180, 180);
    contexto.strokeStyle = "#f00";
    contexto.stroke();
}