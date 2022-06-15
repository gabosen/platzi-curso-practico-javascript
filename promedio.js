const lista = [];
function agregarElemento() {
    lista.push(document.getElementById(`lista`).value);
}


function calcularMediaAritmetica() {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return Number(valorAcumulado) + Number(nuevoElemento);
        }
    );

    const promedioLista = sumaLista / lista.length;
    resultPromedio.innerText = "El promedio es: " + (sumaLista / lista.length);
}