function adicionarFilme() {
    var filmeFavorito = document.getElementById('campoFilme').value
    // // ao clicar no botão: chamamos a função adicionarFilmes
    // // a função adicionarFilmes: executa o var filmeFavorito que guardar a seguinte informação: pegue o elemento pelo id (no caso o elemento campoFilme que é um input de texto) e traga o que está documentado dentro do input e traga somente o valor do documentado.
    // console.log(filmeFavorito)
    if (filmeFavorito.endsWith('.jpg')) {
        // // após ocorre o seguinte: SE a var filmeFavorito armazenada terminar com .jpg pegue esse valor da var guardada e executa a função listarFilmesTela levando como parâmetro o filmeFavorito.
        listarFilmesTela(filmeFavorito)
        // var elementoFilmeFavorito = '<img src=' + filmeFavorito + '>'
        // var elementoListaFilmes = document.getElementById('listaFilmes')
        // elementoListaFilmes.innerHTML =
        //     elementoListaFilmes.innerHTML + elementoFilmeFavorito
    } else {
        // senão: emita um alerta e um console error
        alert('O endereço da Imagem não é Válido !')
        console.error('O endereço da Imagem não é Válido !')
    }
    document.getElementById('campoFilme').value = ''
    // // por fim: pegue o elemento pelo id (no caso o elemento campoFilme que é um input de texto) e traga o que está documentado dentro do input e traga somente o valor do documentado, agora esse documentado receberá um valor vazio, permitindo assim que o input fica em branco para um nova entrada.
}

function listarFilmesTela(listaFilme) {
    console.log(listaFilme)
    // // agora que temos a var filmeFavorito inserida na nova função executamos a função listarFilmesTela e passamos como parâmetro da função o listaFilme como armazenamento da var filmeFavorito.
    var elementoFilmeFavorito = '<img src=' + listaFilme + '>'
    // // agora a var elementoFilmeFavorito recebe e armazena a tag '<img src=' + listaFilme + '>' onde listaFilme irá trazer a url da imagem a ser mostrada na tela por meio da var filmeFavorito.
    var elementoListaFilmes = document.getElementById('listaFilmes')
    // // agora a var elementoListaFilmes irá armazenar a interface documentada e pegue pelo id do elemento no caso o elemento listaFilmes que está dentro de um div no HTML, ou seja, o elementoListaFilmes documenta a tag <div id="listaFilmes"></div>
    console.log(elementoListaFilmes)
    elementoListaFilmes.innerHTML =
        elementoListaFilmes.innerHTML + elementoFilmeFavorito
    console.log(elementoListaFilmes.innerHTML)
    // // para inserir o elementoListaFilmes no HTML usamos a propriedade innerHTML e falamos está sempre recebe elementoListaFilmes que são a tag div inserido no HTML concatenado com elementoFilmeFavorito que são a imagens na tag img.
}

// Iteradores no JavaScript

// >>>>>> WHILE enquanto acontece tal coisa não saia do LOOP
// Pesquise o iterador DO

// var letraCerta = prompt('Digite a Letra A')

// while (letraCerta !== 'A') {
//     //    CONDIÇÃO DE SAÍDA DO LOOP
//     letraCerta = prompt('POR FAVOR DIGITE a Letra A')
// }

// alert('Obrigado por Digitar a Letra A')

// var total = 0

// while (total <= 5) {
//     console.log(total)
//     total++
// }

// console.log('saiu do while ' + total)

// >>>>>> FOR para quando tal coisa acontecer saia do LOOP
// Pesquise o iterador FOREACH

// for (var i = 0; i <= 10; i = i + 1) {
//     // cond inicial + cond true loop + expressão final a ser executada até o final da condição true loop
//     console.log(i)
// }

// var listNumbers = [1, 2, 3, 4, 5]

// for (i = 0; i < listNumbers.length; i++) {
//     if (listNumbers[i] === 3) {
//         console.log('número encontrado')
//     }
//     console.log('número não encontrado')
// }
