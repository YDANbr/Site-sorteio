function sortear() {

    const campoNomes = document.getElementById("nomes");
    const resultado = document.getElementById("resultado");
    const listaSorteados = document.getElementById("listaSorteados");
    const contador = document.getElementById("contador");

    // Separa os participantes por linha
    const nomes = campoNomes.value
        .split("\n")
        .map(nome => nome.trim())
        .filter(nome => nome !== "");

    // Verifica se existem participantes
    if (nomes.length === 0) {
        resultado.innerHTML = "<h3>Não existem participantes disponíveis!</h3>";
        return;
    }

    // Escolhe um participante aleatoriamente
    const indice = Math.floor(Math.random() * nomes.length);
    const ganhador = nomes[indice];

    // Remove o ganhador da lista de participantes
    nomes.splice(indice, 1);

    // Atualiza a caixa de nomes
    campoNomes.value = nomes.join("\n");

    // Atualiza o resultado
    resultado.innerHTML =
        "<h3>🎉 Ganhador do sorteio:</h3>" +
        "<h2>" + ganhador + "</h2>";

    // Adiciona o ganhador ao histórico
    if (listaSorteados.innerHTML.includes("Nenhum sorteio realizado.")) {
        listaSorteados.innerHTML = "";
    }

    const posicao = listaSorteados.children.length + 1;

    const novoSorteado = document.createElement("li");
    novoSorteado.textContent = posicao + "º sorteado: " + ganhador;

    listaSorteados.appendChild(novoSorteado);

    // Atualiza o contador
    contador.textContent =
        "Participantes restantes: " + nomes.length;

}

// Limpa os participantes e o histórico
function limparSorteio() {

    document.getElementById("nomes").value = "";

    document.getElementById("resultado").innerHTML =
        "<h3>O ganhador aparecerá aqui!</h3>";

    document.getElementById("listaSorteados").innerHTML =
        "<li>Nenhum sorteio realizado.</li>";

    document.getElementById("contador").textContent =
        "Participantes restantes: 0";

}
