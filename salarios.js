const colombia = [];

function GuardarSalario() {
    colombia.push({
        name: document.getElementById("nombre").value,
        salary: document.getElementById("salario").value,
    });
}