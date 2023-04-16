const dadosHome3Coluna = async function () {

    // ELEMENTOS UL / LI
    let ul_membros = document.getElementById("home-3-membros");
    let ul_gamertag = document.getElementById("home-3-gamertag");
    let ul_games = document.getElementById("home-3-games");
    let icon_membros ='<i class="fa-solid fa-circle-user"></i>';
    let icon_gamertag ='<i class="fa-brands fa-xbox"></i>';

    // DADOS JSON
    const dados_jogadores = await fetch("./dados/jogadores.json");
    const jogadores = await dados_jogadores.json();
    const dados_games = await fetch("./dados/games.json");
    const games = await dados_games.json();

    // ADICIONAR INFORMAÇÕES NA HOME-3 COLUNA COM BASE NOS DADOS JSON
    jogadores.forEach(element => {
        // INFORMAÇÕES DE MEMBROS
        let li_membros = document.createElement('li');
        li_membros.innerHTML = icon_membros + element.nome;
        ul_membros.appendChild(li_membros);
        // INFORMAÇÕES DE MEMBROS
        let li_gamertag = document.createElement('li');
        li_gamertag.innerHTML = icon_gamertag + element.gamertag;
        ul_gamertag.appendChild(li_gamertag);
    });



}
dadosHome3Coluna();

