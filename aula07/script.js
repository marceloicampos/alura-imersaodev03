// cartas = [
//     (carta0 = {
//         nome: 'Bulbasauro',
//         atributos: {
//             ataque: 7,
//             defesa: 8,
//             magia: 6
//         }
//     }),
//     (carta1 = {
//         nome: 'Darth Vader',
//         atributos: {
//             ataque: 9,
//             defesa: 8,
//             magia: 2
//         }
//     }),
//     (carta2 = {
//         nome: 'Shiryu de Dragão',
//         atributos: {
//             ataque: 5,
//             defesa: 9,
//             magia: 10
//         }
//     })
// ]
// // console.log(cartas)

var carta0 = {
    nome: 'Bulbasauro',
    atributos: {
        Ataque: 7,
        Defesa: 8,
        Magia: 6,
        Mana: 2
    }
}

var carta1 = {
    nome: 'Darth Vader',
    atributos: {
        Ataque: 9,
        Defesa: 8,
        Magia: 2,
        Mana: 9
    }
}

var carta2 = {
    nome: 'Shiryu de Dragão',
    atributos: {
        Ataque: 5,
        Defesa: 9,
        Magia: 10,
        Mana: 5
    }
}
// console.log(carta0.atributos.ataque)

var cartas = [carta0, carta1, carta2]
// console.log(cartas)

// var cartaMachine = 0

// var cartaPlayer = 0

function sortearCarta() {
    // console.log('clicou')
    // console.log(cartas[0])

    var sorteCartaMachine = parseInt(Math.random() * 3)
    // console.log(sorteCartaMachine)
    cartaMachine = cartas[sorteCartaMachine]
    console.log('carta da maquina', cartaMachine)

    var sorteCartaPlayer = parseInt(Math.random() * 3)
    while (sorteCartaMachine == sorteCartaPlayer) {
        // ENQUAnTO o número do jogador for igual ao número da máquina faça o Math.radom até não ser mais igual estrutura de laço
        sorteCartaPlayer = parseInt(Math.random() * 3)
    }
    // console.log(sorteCartaPlayer)
    cartaPlayer = cartas[sorteCartaPlayer]
    console.log('carta do jogador', cartaPlayer)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    viewEscolha()
}

function viewEscolha() {
    var escolha = document.getElementById('escolha')
    // console.log(escolha)
    var escolhasText = ''
    for (var atributo in cartaPlayer.atributos) {
        escolhasText +=
            '<input type="checkbox" name="atributo" value="' +
            atributo +
            '">' +
            atributo
        // console.log(atributo)
    }
    escolha.innerHTML = escolhasText
}

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
    // console.log(selectAtributo)
    console.log(
        'valor do atributo escolhido MÁQUINA',
        cartaMachine.atributos[selectAtributo]
    )
    console.log(
        'valor do atributo escolhido JOGADOR',
        cartaPlayer.atributos[selectAtributo]
    )

    var elementoResultado = document.getElementById('resultado')
    var valorCartaJogador = cartaPlayer.atributos[selectAtributo]
    var valorCartaMaquina = cartaMachine.atributos[selectAtributo]

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML =
            elementoResultado.innerHTML +
            '<p>VOCÊ VENCEU, o seu Atributo é Maior do Adversário</p>' +
            '<p>VALOR CARTA JOGADOR</p>' +
            valorCartaJogador +
            '<p>VALOR CARTA MÁQUINA</p>' +
            valorCartaMaquina
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML =
            elementoResultado.innerHTML +
            '<p>VOCÊ PERDEU, o Atributo do Adversário é Maior</p>' +
            '<p>VALOR CARTA JOGADOR</p>' +
            valorCartaJogador +
            '<p>VALOR CARTA MÁQUINA</p>' +
            valorCartaMaquina
    } else if (valorCartaMaquina == undefined) {
        elementoResultado.innerHTML =
            'VOCÊ NÃO ESCOLHEU ATRIBUTO, ESCOLHA JOGAR NOVAMENTE'
    } else {
        elementoResultado.innerHTML = 'EMPATOU'
    }
    document.getElementById('btnJogar').disabled = true
}

function jogarNovamente() {
    document.location.reload(true)
}
