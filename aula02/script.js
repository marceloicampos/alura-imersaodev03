function Converter() {
    var valorElement = document.getElementById('valor')
    // getElementById retorna o elemento pelo ID
    var valorNumber = valorElement.value
    // valeu retorna somente o valor do input
    var valorDolar = parseFloat(valorNumber)
    // parseFloat retorna o valor em decimal e o parseInt retorna o valor em inteiro

    // console.log(valorDolar)

    var valorReal = (valorDolar * 5).toFixed(2)
    // console.log(valorReal)

    var elementValorConvertido = document.getElementById('valorConvertido')

    var valorConvertido = 'O PS5 custa R$ ' + valorReal

    elementValorConvertido.innerHTML = valorConvertido
}

// console.log('log do console antes de tudo')
