


const lista = [];
function agregarElemento() {
    lista.push(document.getElementById(`lista`).value);
}

function calculoModa() {
    const lista1Count = {};
    lista.map(
        function (elemento) {
            if (lista1Count[elemento]) {
                lista1Count[elemento] += 1;
            } else {
                lista1Count[elemento] = 1;
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB) {
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];
    resultModa.innerText = "La moda es: " + moda[0] + " se repite: " + moda[1];
}




