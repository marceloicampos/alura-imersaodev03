var carta0 = {
    nome: 'Bulbasauro',
    imagem: './../aula08/files/card-bulba.png',
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
}

var carta1 = {
    nome: 'Darth Vader',
    imagem: './../aula08/files/card-darth.jpg',
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
}

var carta2 = {
    nome: 'Shiryu de Dragão',
    imagem: './../aula08/files/card-shiryu.jpg',
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
}
// console.log(carta0.atributos.ataque)

var cartas = [carta0, carta1, carta2]
// var cartaPlayer
// var cartaMachine
// console.log(cartas)

function sortearCarta() {
    // console.log('clicou')
    // console.log(cartas[0])

    var sorteCartaMachine = parseInt(Math.random() * 3)
    // console.log(sorteCartaMachine)
    cartaMachine = cartas[sorteCartaMachine]
    // console.log('carta da maquina', cartaMachine)

    var sorteCartaPlayer = parseInt(Math.random() * 3)
    while (sorteCartaMachine == sorteCartaPlayer) {
        sorteCartaPlayer = parseInt(Math.random() * 3)
    }
    // console.log(sorteCartaPlayer)
    cartaPlayer = cartas[sorteCartaPlayer]
    // console.log('carta do jogador', cartaPlayer)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    // viewEscolha()
    viewCartaPlayer()
}

// function viewEscolha() {
//     var escolha = document.getElementById('escolha')
//     // console.log(escolha)
//     var escolhasText = ''
//     for (var atributo in cartaPlayer.atributos) {
//         escolhasText +=
//             '<input type="radio" id="' +
//             atributo +
//             '" name="atributo" value="' +
//             atributo +
//             '">' +
//             '<label for="' +
//             atributo +
//             '"> ' +
//             atributo +
//             ' </label>'
//         // '<input type="radio"                       name="atributo" value="' + atributo + '">'                                     + atributo >>> sem quebrar
//         // console.log(atributo)
//     }
//     escolha.innerHTML = escolhasText
// }

function selectEscolha() {
    var selectAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < selectAtributo.length; i++) {
        if (selectAtributo[i].checked == true) {
            return selectAtributo[i].value
        }
    }
}

function jogar() {
    var selectAtributo = selectEscolha()
    var divResultado = document.getElementById('resultado')
    // console.log(selectAtributo)

    // console.log(
    //     'valor do atributo escolhido para MÁQUINA',
    //     cartaMachine.atributos[selectAtributo]
    // )

    // console.log(
    //     'valor do atributo escolhido para JOGADOR',
    //     cartaPlayer.atributos[selectAtributo]
    // )

    if (
        cartaPlayer.atributos[selectAtributo] >
        cartaMachine.atributos[selectAtributo]
    ) {
        htmlResultado = '<p class="resultado-final">VOCÊ VENCEU</p>'
    } else if (
        cartaPlayer.atributos[selectAtributo] <
        cartaMachine.atributos[selectAtributo]
    ) {
        htmlResultado = '<p class="resultado-final">VOCÊ PERDEU</p>'
    } else if (cartaPlayer.atributos[selectAtributo] == undefined) {
        htmlResultado =
            '<p class="resultado-final">VOCÊ NÃO ESCOLHEU ATRIBUTO, ESCOLHA JOGAR NOVAMENTE</p>'
    } else {
        htmlResultado =
            '<p class="resultado-final">VOCÊ EMPATOU COM A MÁQUINA</p>'
    }

    // var elementoResultado = document.getElementById('resultado')
    // var valorCartaJogador = cartaPlayer.atributos[selectAtributo]
    // var valorCartaMaquina = cartaMachine.atributos[selectAtributo]

    // if (valorCartaJogador > valorCartaMaquina) {
    //     elementoResultado.innerHTML =
    //         elementoResultado.innerHTML +
    //         '<p>VOCÊ VENCEU, o seu Atributo é Maior do Adversário</p>' +
    //         '<p>VALOR CARTA JOGADOR</p>' +
    //         valorCartaJogador +
    //         '<p>VALOR CARTA MÁQUINA</p>' +
    //         valorCartaMaquina
    // } else if (valorCartaMaquina > valorCartaJogador) {
    //     elementoResultado.innerHTML =
    //         elementoResultado.innerHTML +
    //         '<p>VOCÊ PERDEU, o Atributo do Adversário é Maior</p>' +
    //         '<p>VALOR CARTA JOGADOR</p>' +
    //         valorCartaJogador +
    //         '<p>VALOR CARTA MÁQUINA</p>' +
    //         valorCartaMaquina
    // } else if (valorCartaMaquina == undefined) {
    //     elementoResultado.innerHTML =
    //         'VOCÊ NÃO ESCOLHEU ATRIBUTO, ESCOLHA JOGAR NOVAMENTE'
    // } else {
    //     elementoResultado.innerHTML = 'EMPATOU'
    // }

    divResultado.innerHTML = htmlResultado

    document.getElementById('btnJogar').disabled = true

    viewCartaMachine()
}

function viewCartaPlayer() {
    var divCartaPlayer = document.getElementById('carta-jogador')
    divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.imagem})`
    // divCartaPlayer.style.backgroundImage = 'url(' + cartaPlayer.imagem + ')'
    var moldura =
        '<img src="./../aula08/files/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'

    var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`

    var tagHtml = '<div id="escolha" class="carta-status">'

    var escolhasText = ''
    for (var atributo in cartaPlayer.atributos) {
        escolhasText +=
            '<input type="radio" id="' +
            'p' +
            atributo +
            '" name="atributo" value="' +
            atributo +
            '">' +
            '<label for="' +
            'p' +
            atributo +
            '"> ' +
            atributo +
            ' ' +
            cartaPlayer.atributos[atributo] +
            ' </label>' +
            '<br>'
        //  '<input type="radio"                             name="atributo" value="' + atributo + '">' +                                           atributo + ' ' + cartaPlayer.atributos[atributo] +               '<br>' >>> sem quebrar
        // console.log(atributo)
    }

    divCartaPlayer.innerHTML =
        moldura + nome + tagHtml + escolhasText + '</div>'
}

function viewCartaMachine() {
    var divCartaMachine = document.getElementById('carta-maquina')
    divCartaMachine.style.backgroundImage = `url(${cartaMachine.imagem})`
    // divCartaPlayer.style.backgroundImage = 'url(' + cartaMachine.imagem + ')'
    var moldura =
        '<img src="./../aula08/files/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;" />'

    var nome = `<p class="carta-subtitle">${cartaMachine.nome}</p>`

    var tagHtml = '<div id="escolha" class="carta-status">'

    var escolhasText = ''
    for (var atributo in cartaMachine.atributos) {
        escolhasText +=
            '<p id="' +
            'm' +
            atributo +
            '" name="atributo" value="' +
            atributo +
            '">' +
            '<label for="' +
            'm' +
            atributo +
            '"> ' +
            atributo +
            ' ' +
            cartaMachine.atributos[atributo] +
            ' </label>' +
            '</p>'
        //  '<p                             name="atributo" value="' + atributo + '">' +                                           atributo + ' ' + cartaMachine.atributos[atributo] +               '</p>' >>> sem quebrar
        // console.log(atributo)
    }

    divCartaMachine.innerHTML =
        moldura + nome + tagHtml + escolhasText + '</div>'
}

function jogarNovamente() {
    document.location.reload(true)
}
