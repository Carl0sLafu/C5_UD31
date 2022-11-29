var num1 = 0;
var num2 = 0;
var operador = "";
var constructor = 0;
var decimals = 0;
var haveDecimals = false;

function number(i) {

    if (i >= 0 && !haveDecimals) {

        constructor *= 10;
        constructor += i;

    } else if (i >= 0 && haveDecimals) {
        
        constructor += (i / Math.pow(10, decimals));
        decimals++;

    } else if (i == -1) {

        constructor *= -1;

    } else {

        decimals++;
        haveDecimals = true;

    }

    document.getElementById("result").innerHTML = constructor;

}

function back() {

    if (!haveDecimals) {

        constructor /= 10;

    }

    constructor = Math.trunc(constructor * Math.pow(10, decimals));
    constructor /= Math.pow(10, decimals);

    if (decimals > 0) {

        decimals--;

    } else {

        haveDecimals = false;

    }

    document.getElementById("result").innerHTML = constructor;

}

function reset() {

    constructor = 0;
    num1 = 0;
    num2 = 0;
    operador = "";
    decimals = 0;
    haveDecimals = false;

    document.getElementById("result").innerHTML = constructor;

}

function operator(j) {

    if (operador.length != -1 && !j.includes("1/x")) {

        num1 = finishOperation();
        num2 = 0;
        operador = j;

    } else if (j.includes("1/x")) {

        constructor = 1/constructor;

    } else {

        operador = j;
        num1 = constructor;

    }

}

function finishOperation() {

    if (num1 != 0) {

        num2 = constructor;

    }

    var result = 0;

    switch (operador.includes()) {

        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '':
            result = Math.pow(num1, num2);
            break;

    }

    reset();
    
    document.getElementById("result").innerHTML = result;
    return result;

}