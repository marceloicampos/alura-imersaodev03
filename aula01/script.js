// var userName = 'marceloicampos'
// // strings ficam entres aspas

// var firstNote = 8.991
// var secondNote = 9.891
// var thirdNote = 9.891
// var fourthNote = 10.891
// var finalNote = ((firstNote + secondNote + thirdNote + fourthNote) / 4).toFixed(1)
// // numbers NÃO ficam entres aspas

// console.log('Bem vindo', userName)

// console.log('Primeira Nota', firstNote)
// console.log('Segunda Nota', secondNote)
// console.log('Terceira Nota', thirdNote)
// console.log('Quarta Nota', fourthNote)

// console.log('Média das Nota', finalNote)

function Nota() {
    var nota1 = parseFloat(document.getElementById('nota1').value)
    // console.log(nota1)

    var nota2 = parseFloat(document.getElementById('nota2').value)
    // console.log(nota2)

    var media = ((nota1 + nota2) / 2).toFixed(1)

    var mostraMedia = 'Sua Média Escolar é: ' + media

    var elementMedia = document.getElementById('notaMedia')

    elementMedia.innerHTML = mostraMedia
}
