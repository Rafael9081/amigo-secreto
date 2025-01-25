//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os amigos
let listaDeAmigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nome = inputAmigo.value.trim();
    
    // Validar entrada vazia
    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }
    
    // Adicionar à lista
    listaDeAmigos.push(nome);
    
    // Limpar input
    inputAmigo.value = '';
    
    // Atualizar lista na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Função para sortear amigo
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear!');
        return;
    }
    
    // Sortear um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Exibir resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<li class="sorteado"> ${amigoSorteado} foi sorteado(a)! </li>`;
}
