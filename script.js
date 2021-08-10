const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")
const formulario = document.getElementById("formulario")
const botaoCalcular = document.getElementById("botaoCalcular")

function calcularImc(){
    const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2)
    resultado.textContent = imc
}

botaoCalcular.addEventListener("click", calcularImc)
// function calcular(){
//     if(peso.value !== '' && altura.value !== ''){
//     resultado.value = parseFloat(peso.value) / parseFloat(altura.value * altura.value)
//     formulario.classList.add("botaoCalcular")
//     // createMessage("Peso normal", "sucess")
//     }
//     else{
//         alert("Preencha os campos corretamente!")
//     }
// }
// botaoCalcular.addEventListener("click", calcular)