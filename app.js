let lista = [];
let listaAmigos = document.getElementById("listaAmigos");
let listaSorteados = [];
let nomeInput = document.getElementById("amigo");
let resultado = document.getElementById("resultado");

function primeiraLetraMaiuscula(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function adicionarAmigo() {
    let nomeAmigo = primeiraLetraMaiuscula(nomeInput.value);

    if (nomeAmigo == "") {
        alert("Ops! Esqueceu de colocar um nome? Tente novamente");
        return;
    } else if (lista.includes(nomeAmigo)) {
        alert("Esse amigo já foi adicionado! Tente outro nome!");
        return;
    }

    lista.push(nomeAmigo);
    console.log(lista);
    nomeInput.value = '';
    adicionarLista();
}

function adicionarLista() {
    listaAmigos.innerHTML = "";

    lista.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

function sortearAmigo() {
    if (lista.length === 0) {
        alert("Ops! Não tenho nomes para sortear. Adicione pelo menos um amigo!");
        return;
    }

    if (listaSorteados.length === lista.length) {
        listaSorteados = [];
        alert("Todos os nomes foram sorteados! A lista foi limpa.");
        limparLista();
        return;
    }

    let nomeSorteado = lista[Math.floor(Math.random() * lista.length)];

    if (listaSorteados.includes(nomeSorteado)) {
        return sortearAmigo();
    }

    listaSorteados.push(nomeSorteado);
    resultado.innerHTML = `Seu amigo secreto é: ${nomeSorteado}`;
    console.log(nomeSorteado);
}

function limparLista() {
    lista = [];
    adicionarLista();
    resultado.innerHTML = "";
}