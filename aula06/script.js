var rafa = { nome: 'RAFA', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var paulo = { nome: 'PAULO', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var gui = { nome: 'GUI', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
var celo = { nome: 'CELO', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 }
// >>> as chaves referenciam objetos dentro do Javascript, em outras linguagens se fala em registro ou escultura

// console.log(rafa.vitorias, paulo.empates, gui.derrotas)
// >>> assim podemos chamar valores específicos de cada objeto

// console.log(rafa)
// console.log(paulo)
// console.log(gui)
// >>> console SEM alteração no resultado de pontos

function calcPontos(jogador) {
    // >>> essa função executa o calculo abaixo de acordo com o parâmetro/argumento jogador
    var pontos = jogador.vitorias * 3 + jogador.empates - jogador.derrotas
    // >>> essa var pontos guarda o calculo
    // console.log(pontos)
    return pontos
    // >>> e o return retorna para função o valor guardado em pontos, ou seja, retorne o resultado pontos para a função que executou o calculo de pontos
}

// var resultPontos = calcPontos(rafa)
// console.log(resultPontos)
// >>> logo irá mostrar resultPontos mostrando assim todos o objeto pontos da rafa calculado

rafa.pontos = calcPontos(rafa)
paulo.pontos = calcPontos(paulo)
gui.pontos = calcPontos(gui)
celo.pontos = calcPontos(celo)
// >>> aqui ocorre assim: calcula os pontos da rafa, paulo e gui e então atribua esse valor para a chave do objeto rafa.pontos, paulo.pontos e gui.pontos

// console.log(rafa)
// console.log(paulo)
// console.log(gui)
// >>> console COM alteração no resultado de pontos

var jogadores = [rafa, paulo, gui, celo]
// console.log(jogadores)

function viewJogadores(jogadores) {
    var element = ''
    for (var i = 0; i < jogadores.length; i++) {
        element += '<tr>'
        element += '<td>' + jogadores[i].nome + '</td>'
        element += '<td>' + jogadores[i].vitorias + '</td>'
        element += '<td>' + jogadores[i].empates + '</td>'
        element += '<td>' + jogadores[i].derrotas + '</td>'
        element += '<td>' + jogadores[i].pontos + '</td>'
        element +=
            '<td><button onclick="adicionarVitoria(' +
            i +
            ')">Vitória</button></td>'
        element +=
            '<td><button onclick="adicionarEmpate(' +
            i +
            ')">Empate</button></td>'
        element +=
            '<td><button onclick="adicionarDerrota(' +
            i +
            ')">Derrota</button></td>'
        element += '</tr>'
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = element
}

viewJogadores(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calcPontos(jogador)
    viewJogadores(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calcPontos(jogador)
    viewJogadores(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    jogador.pontos = calcPontos(jogador)
    viewJogadores(jogadores)
}
