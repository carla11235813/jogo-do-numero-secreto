/*const titulo = document.querySelector("h1");
titulo.innerHTML = 'Jogo do número secreto';*/

/*const paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";*/

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumerosAleatorios();
let tentativas = 1;

function exibirMensagemInicial() {
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', "Escolha um número entre 1 e 10");
}

exibirMensagemInicial();

function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirNaTela('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirNaTela("p", "O número secreto é menor");
        } else {
            exibirNaTela("p", "O número secreto é maior")
        }

        limparCampo();
        tentativas++;
    }
}

function gerarNumerosAleatorios() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.lenth

    if (quantidadeDeElementosDaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumerosAleatorios();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumerosAleatorios();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}