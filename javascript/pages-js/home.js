const dadosHome3Coluna = async function () {

    // ELEMENTOS UL / LI
    var ul_membros = document.getElementById("home-3-membros");
    var ul_gamertag = document.getElementById("home-3-gamertag");
    var ul_games = document.getElementById("home-3-games");

    // DADOS JSON
    const dados_jogadores = await fetch("./dados/jogadores.json");
    const jogadores = await dados_jogadores.json();
    const dados_games = await fetch("./dados/games.json");
    const games = await dados_games.json();

    // ADICIONAR INFORMAÇÕES NA HOME-3 COLUNA COM BASE NOS DADOS JSON
    jogadores.forEach(element => {
        console.log(element.nome);
    });

}
dadosHome3Coluna();

