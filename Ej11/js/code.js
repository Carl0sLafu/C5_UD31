function tirardados() {

    var dado1 = Math.round((Math.random() * 5) + 1);
    var dado2 = Math.round((Math.random() * 5) + 1);

    return dado1 + dado2;

}

var resultadosTiradas = [];

for (let index = 0; index < 36000; index++) {

    resultadosTiradas[index] = tirardados();
    
}

for (let index = 0; index < resultadosTiradas.length; index++) {
    
    console.log(resultadosTiradas[index]);
    
}
