// DESAFIO DA ATIVIDADE PRÁTICA (SINTAXE E OPERADORES EM JS - DIO)

// Função para checar os requisitos: (optei por realizar tudo em uma única função)
function numberChecker(num1,num2){

    // confere se os números são iguais:
    let isEqual = (num1 === num2)? "iguais" : "diferentes"

    // declaração das outras variaveis:
    const numberSum = num1 + num2
    let isBiggerThan10
    let isBiggerThan20

    // confere se é maior/menor/igual a 10:
    if (numberSum > 10){
        isBiggerThan10 = "maior que"
    }else if (numberSum === 0){
        isBiggerThan10 = "igual a"
    }else{
        isBiggerThan10 = "menor que"
    }

    // confere se é maior/menor/igual a 10:
    if (numberSum > 20){
        isBiggerThan20 = "maior que"
    }else if (numberSum === 0){
        isBiggerThan20 = "igual a"
    }else{
        isBiggerThan20 = "menor que"
    }

    // retorno da função:
    return `${num1} e ${num2} são ${isEqual}.\n O valor de sua soma é: ${numberSum}.\n Sua soma é ${isBiggerThan10} 10.\n Sua soma é ${isBiggerThan20} 20.`
}

// obtenção dos valores dos inputs do usuário:
var firstNum = parseFloat(prompt("Digite o primeiro número:\n"))
var secondNum = parseFloat(prompt("Digite o segundo número:\n"))

// chamando e exibindo a função:
console.log(numberChecker(firstNum,secondNum))
// chamando com alert para exibir de forma visível ao usuário que não estiver no console:
alert(numberChecker(firstNum,secondNum))