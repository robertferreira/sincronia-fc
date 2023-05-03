const dadosTemporadas = async function () {
    const dados_temporadas = await fetch("../dados/temporadas.json");
    const temporadas = await dados_temporadas.json();
    const icon_bola = '<i class="fa-regular fa-futbol"></i>';
    const icon_taca = '<i class="fa-solid fa-trophy"></i>';
    const icon_acessos = '<i class="fa-solid fa-circle-up"></i>';
    const icon_rebaixamentos = '<i class="fa-solid fa-circle-down"></i>';
    const icon_vitorias = '<i class="fa-solid fa-circle-check"></i>';
    const icon_empates = '<i class="fa-solid fa-circle-minus"></i>';
    const icon_derrotas = '<i class="fa-solid fa-circle-xmark"></i>';

    temporadas.forEach(element => {
        console.log(element.fifa)

        //Create Card
        var card = document.createElement('div');
        card.classList.add('temporadas-2-card');
        //Create Card Title
        var card_title = document.createElement('div');
        card.classList.add('temporadas-2-card-title');
        //Create Card Statistics
        var card_statistics = document.createElement('div');
        card.classList.add('temporadas-2-card-statistics');
        //Create Table
        var table = document.createElement('table');
    });
}
dadosTemporadas();