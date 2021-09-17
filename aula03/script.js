var secretNumber = parseInt(Math.random() * 11)

function Chutar() {
    var valorInput = parseInt(document.getElementById('valor').value)

    // var elementResult = document.getElementById('resultado')

    if (valorInput == secretNumber) {
        // console.log('Você Acertou !')
        document.getElementById('resultado').innerHTML = 'Você Acertou ! Parabéns !'
    } else if (valorInput > 10 || valorInput < 0) {
        // console.log('Digite SOMENTE um número de 0 a 10')
        document.getElementById('resultado').innerHTML = 'Digite SOMENTE um número de 0 a 10 !'
    } else {
        // console.log('Você Errou !')
        document.getElementById('resultado').innerHTML = 'Você Errou ! O número Secreto é: ' + secretNumber
    }

    // >	Maior que        (a > b)
    // <	Menor que        (a < b)
    // >=	Maior ou igual a (a >= b)
    // <=	Menor ou igual a (a <= b)
    // ==	Igual a          (a == b)
    // !=	Diferente de     (a !== b)
    // ===	Idêntico a       (a === b)
    // !==	Não idêntico a   (a !== b)
    // &&	E/and            (a && b)
    // ||	Ou/or            (a || b)

    // >>> abaixo uma outra maneira de escrever o código seria inserindo mais um else if SEM inserir operador booleano
    // else if (valorInput < 0) {
    //   console.log('Digite SOMENTE um número de 0 a 10')
    // }

    // >>> = é atribuição
    // >>> == é comparação por resultado ou por valor dos dados (independente dos dados apresentados)
    // >>> === é comparação por valor e tipo de dados (ou seja a comparação depende do mesmo valor e tipo de dado)

    // console.log(valorInput)
    // console.log((Math.random() * 10).toFixed(0))
    // >>> multiplicando por 10 NÃO gera o DEZ
    // >>> com o to.Fixed(0) NÃO gera o ZERO
    console.log(secretNumber)
}
