//Helpers
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function ordenaLista() {
    const salariosCol = colombia.map(
        function (personita) {
            return personita.salary;
        }
    );
    return salariosCol.sort(
        function (salaryA,salaryB) {
            return salaryA - salaryB;
        }
    );
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return Number(valorAcumulado) + Number(nuevoElemento);
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

// Calculadora de medianas
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1,personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana general

function CalculoMedianaGeneral() {    
    const salariosColSorted = ordenaLista();
    ResultGeneral.innerText = "La media general de salarios es: $" + medianaSalarios(salariosColSorted);
}


//Mediana del top 10%
function CalculoMedianaTop10() {    
    const salariosColSorted = ordenaLista();
    const spliceStart = parseInt(salariosColSorted.length * 0.9);
    const spliceCount = salariosColSorted.length - spliceStart;
    const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount);
    ResultTop10.innerText = "La media del top10 de salarios es: $" + medianaSalarios(salariosColTop10);
}



//Calculo de la tasa de ahorro
function calcularTasaDeAhorro() {
    const datosANB = document.getElementById("ANB").value;
    const datosPBI = document.getElementById("PBI").value;
    const tasaDeAhorro = datosANB / datosPBI;
    ResultTasaAhorro.innerText = "La tasa de ahorro es: " + tasaDeAhorro + "%";
}

//Calculo del ahorro nacional bruto
function CalcularAhorroNacionalBruto() {
    const datosPNB = document.getElementById("PNB").value;
    const datosConsumo = document.getElementById("consumo").value;
    const ANB = Number(datosPNB) - Number(datosConsumo);
    ResultANB.innerText = "La tasa de ahorro es: $" + ANB;
}

//calculo del producto nacional bruto

function calcularPNB() {
    const datosPBI = document.getElementById("PBI").value;
    const datosRentasNacionalesEnExterior = document.getElementById("rentasNacionalesEnExterior").value;
    const datosRentasExtrangerasEnPais = document.getElementById("rentasExtrangerasEnPais").value;
    const PNB = Number(datosPBI) + Number(datosRentasNacionalesEnExterior) - Number(datosRentasExtrangerasEnPais);
    ResultPNB.innerText = "La tasa de ahorro es: $" + PNB;
}

//calculo del producto bruto interno
function calcularPBI() {
    const datosConsumo = document.getElementById("consumo").value;
    const datosInversion = document.getElementById("inversion").value;
    const datosGastoPublico = document.getElementById("gastoPublico").value;
    const datosExportaciones = document.getElementById("exportaciones").value;
    const datosImportaciones = document.getElementById("importaciones").value;
    const PBI = Number(datosConsumo) + Number(datosInversion) + Number(datosGastoPublico) + Number(datosExportaciones) - Number(datosImportaciones);
    ResultPBI.innerText = "EL PBI es: $" + PBI;
}


