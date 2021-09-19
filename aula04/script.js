var filmsList = [
    './../aula04/files/j-yesterday.jpg',
    './../aula04/files/j-chegada.jpg',
    './../aula04/files/j-ilha.jpg'
]

for (var i = 0; i < filmsList.length; i++) {
    document.write('<img src=' + filmsList[i] + '>')
}

// var filmsList = ['Yesterday', 'A Chegada', 'O Hobbit']
// //  ELEMENTO DO ARRAY    1           2             3
// //  ÍNDICE DO ARRAY      0           1             2

// filmsList.push('A Coisa', 'A Ilha', 'Nova Ilha', 'Outra Ilha')
// //                4           5
// //                3           4

// for (var idList = 0; idList < filmsList.length; idList++) {
//   document.write('<p>' + filmsList[idList] + '</p>')
// }

// for (var idList = 0; idList <= 5; idList++) {
//   document.write('<p>' + filmsList[idList] + '</p>')
//   document.write('<p>' + idList + '</p>')
// }

// for (valor inicial; condição; expressão final)

// for (var idList = 0; idList <= 5; idList = idList + 1) {
//   document.write('<p>' + filmsList[idList] + '</p>')
//   document.write('<p>' + idList + '</p>')
// }

// for (var idList = 0; idList <= 5; idList = idList + 1) {
//   document.write('<p>' + filmsList[idList] + '</p>')
// }

// for (var idList = 0; idList <= 5; idList = idList + 1) {
//   document.write('<p>' + idList + '</p>')
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// document.write('<p>' + filmsList[0] + '</p>')
// document.write('<p>' + filmsList[1] + '</p>')
// document.write('<p>' + filmsList[2] + '</p>')
// document.write('<p>' + filmsList[3] + '</p>')
// document.write('<p>' + filmsList[4] + '</p>')
// document.write('<p>' + filmsList[5] + '</p>')
// O 5 retorna undefined, pois não existe o sexto elemento

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// var filmONe = 'Yesterday'

// var filmTwo = 'A Chegada'

// var filmThree = 'Escola de Rock'

// document.write('<p>' + filmONe + '</p>')
// // document.write('<p style="color: white;">' + filmeONe + '</p>')

// document.write('<p>' + filmTwo + '</p>')
// // document.write('<p style="color: white;">' + filmeONe + '</p>')

// document.write('<p>' + filmThree + '</p>')
// // document.write('<p style="color: white;">' + filmeONe + '</p>')
