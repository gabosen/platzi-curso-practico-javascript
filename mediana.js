
const lista = [];
function agregarElemento() {
    lista.push(document.getElementById(`lista`).value);
}

function calcularMediaAritmetica(arreglo) {
      const sumaLista = arreglo.reduce(
          function (valorAcumulado = 0, nuevoElemento) {
              return Number(valorAcumulado) + Number(nuevoElemento);
          }
      );
      const promedioLista = sumaLista / arreglo.length;
      return promedioLista;
}


function calculoMediana() {
    lista.sort(function(a, b) {
        return a - b;
        });
    const mitadLista = parseInt(lista.length / 2);
    if(lista.length % 2 == 0){
        const elemento1 = lista[mitadLista - 1];
        const elemento2 = lista[mitadLista];
        const promedioElementos1y2 = calcularMediaAritmetica([elemento1, elemento2]);
        resultMediana.innerText = "La mediana es: " + promedioElementos1y2;
    } else {
        resultMediana.innerText = "La mediana es: " + lista[mitadLista];
    }
}
