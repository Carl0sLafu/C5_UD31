function escapeHTML (text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"],
                        ["<", "&lt;"], [">", "&gt; "]];
    
    forEach(replacements, function (replace) {

        text = text.replace (replace [0], replace [1]);

    });

    return text;
}

const ExpRegFecha = "^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$";
const ExpRegEmail = "^w+ ([.-]?w+)*@w+ ([.-]?w+)* (.w {2,4})+$";

var texto = prompt("Escribe una frase");

comprobarExpresiones(texto);

function comprobarExpresiones(texto) {

    if (texto.match(ExpRegFecha)) {

        alert("Se a encontrado una fecha");

    }

    if (texto.match(ExpRegEmail)) {

        alert("Se a encontrado un email");

    }

}
