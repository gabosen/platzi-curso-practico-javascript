
// Codigo del cuadrado



function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}


//Codigo del triángulo



function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}



function areaTriangulo(altura, base) {
    return (altura * base) / 2;
}


// Codigo del circulo


function diametroCirculo(radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}



function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    resultPerimetroCuadrado.innerText = "El perimetro es " + perimetro;
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    resultAreaCuadrado.innerText = "El area es " + area;
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTrianguloLado1");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const value2 = Number(input2.value);

    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const perimetro = perimetroTriangulo(value1,value2,valueBase);
    resultPerimetroTriangulo.innerText = "El perimetro es " + perimetro;
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("InputTrianguloBase");
    const valueBase = Number(inputBase.value);

    const inputAltura = document.getElementById("InputTrianguloAltura");
    const valueAltura = Number(inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    resultAreaTriangulo.innerText = "El area es " + area;
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    resultPerimetroCirculo.innerText = "El perimetro es: " + perimetro;
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    resultAreaCirculo.innerText = "El area es " + area;
}

function alturaTriangulo(lado,base) {
    return Math.sqrt((lado * lado) - ((base / 2) * (base / 2)));
}


function calcularAlturaTriangulo() {
    const input1 = document.getElementById("InputIsoscelesLado1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputIsoscelesLado2");
    const value2 = input2.value;
    const inputBase = document.getElementById("InputIsoscelesBase");
    const valueBase = inputBase.value;
    if ((value1 == value2) && (value1 != valueBase)) {
        const altura = alturaTriangulo(value1, valueBase);
        resultAltura.innerText = "La altura es: " + altura;
    } else if ((value1 == valueBase) && (value1 != value2)) {
        const altura = alturaTriangulo(value1, value2);
        resultAltura.innerText = "La altura es: " + altura;
    } else if ((value2 == valueBase) && (value2 != value1)) {
        const altura = alturaTriangulo(value2, value1);
        resultAltura.innerText = "La altura es: " + altura;
    } else {
        resultAltura.innerText ="El tríangulo ingresado no es isósceles";
    }
}