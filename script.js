function calcular(){
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value); 
    var numero3 = parseInt(document.getElementById("numero3").value); 
    var numero4 = parseInt(document.getElementById("numero4").value); 
    var mediaConta = document.getElementById("mediaConta");

    if (isNaN(numero1)) numero1=0;
    if (isNaN(numero2)) numero2=0;
    if (isNaN(numero3)) numero3=0;
    if (isNaN(numero4)) numero4=0;

    mediaConta.value = (numero1 + numero2 + numero3 + numero4) / 4;
}

function limpar(){
    document.getElementById("numero1").value = " ";
    document.getElementById("numero2").value = " ";
    document.getElementById("numero3").value = " ";
    document.getElementById("numero4").value = " ";
    document.getElementById("mediaConta").value = " ";
}