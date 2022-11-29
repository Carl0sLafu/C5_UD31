setInterval(recargarHora(), 1000);

function recargarHora() {

    var tiempo = new Date();

    document.getElementById("hora").innerHTML = tiempo.getHours();
    document.getElementById("min").innerHTML = tiempo.getMinutes();
    document.getElementById("seg").innerHTML = tiempo.getSeconds();

}