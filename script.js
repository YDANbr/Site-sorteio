script.js

function sortear() {
    const campoNomes = document.getElementById("nomes");
    const resultado = document.getElementById("resultado");

    const nomes = campoNomes.value
        .split("\n")
        .map(nome => nome.trim())
        .filter(nome => nome !== "");

    if (nomes.length === 0) {
        resultado.innerHTML =
            "<h3>Digite pelo menos um nome para sortear!</h3>";
        return;
    }

    const indice = Math.floor(Math.random() * nomes.length);
    const ganhador = nomes[indice];

    resultado.innerHTML =
        "<h3>🎉 O ganhador é:</h3>" +
        "<h2>" + ganhador + "</h2>";
}
