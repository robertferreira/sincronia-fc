const dadosTemporadas = async function () {
    const dados_temporadas = await fetch("../dados/temporadas.json");
    const temporada = await dados_temporadas.json();

    console.log(temporada);
}
dadosTemporadas();