
// Este código comentado é o q eu ia usar sem ver o video do paulo
function calculo(){
    var er1 = document.getElementById("di1");

    let nome = document.getElementById("nome").value;
    let quanthr = document.getElementById("quanthr").value;
    let valorhr = document.getElementById("valorhr").value;
    let imposto = document.getElementById("imposto").value;

    // calculo do salario bruto
    let salaBruto = quanthr*valorhr;

    // calculo do salario liquido 
    let salaLiquido = salaBruto-imposto;

    // print array
    er1.innerText = "Salario bruto: " + salaBruto + "\nSalario liquido: " + salaLiquido;
}

function limpar() {
    var nome = document.getElementById("nome");
    var valor = document.getElementById("quanthr");
    var horas = document.getElementById("valorhr");
    var imposto = document.getElementById("imposto");

    nome.value = "";
    valor.value = "";
    horas.value = "";
    imposto.value = "";

    console.clear();
}
