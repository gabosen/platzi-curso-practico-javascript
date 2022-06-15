const lista = [];
function agregarElemento() {
    lista.push(document.getElementById(`lista`).value);
}
function calcularMediaArmonica() {
    let sumasInversas = 0;
    lista.map(
        function (elemento) {
            sumasInversas += (1 / elemento);
        }
    );
    resultMediaArmonica.innerText = "La media armonica es: " + (lista.length / sumasInversas);
}
