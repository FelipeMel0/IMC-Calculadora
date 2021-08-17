const nome = document.getElementById("nome")
const altura = document.getElementById("altura")
const peso = document.getElementById("peso")
const resultado = document.getElementById("resultado")
const formulario = document.getElementById("formulario")
const botaoCalcular = document.getElementById("botaoCalcular")

function calcularImc(){

    if(nome.value !== '' && peso.value !== '' && altura.value !== ''){

    const imc = parseFloat(peso.value) / (parseFloat(altura.value) ** 2)

    if(imc < 18.5){
        resultado.textContent = "O resultado do IMC de " + nome.value + " deu: " + imc.toFixed(2) + ". Você está abaixo do peso!"
    }
    else if(imc >= 18.5 && imc <= 24.9){
        resultado.textContent = "O resultado do IMC de " + nome.value + " deu: " + imc.toFixed(2) + ". Você está no peso ideal!"
    }
    else if(imc >= 25 && imc <= 29.9){
        resultado.textContent = "O resultado do IMC de " + nome.value + " deu: " + imc.toFixed(2) + ". Você está acima do peso!"
    }
    else if(imc >= 30 && imc <= 34.9){
        resultado.textContent = "O resultado do IMC de " + nome.value + " deu: " + imc.toFixed(2) + ". Você está com Obesidade grau I"
    }
    else if(imc >= 35 && imc <= 39.9){
        resultado.textContent = "O resultado do IMC de " + nome.value + " deu: " + imc.toFixed(2) + ". Você está com Obesidade grau II"
    }
    else{
        resultado.textContent = "O resultado do IMC de " + nome.value + " deu: " + imc.toFixed(2) + ". Você está com Obesidade grau III"
    }
}

    else{
        resultado.textContent = "Preencha todos os campos corretamente!"
    }
}
 
botaoCalcular.addEventListener("click", calcularImc)