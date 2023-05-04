const dadosTemporadas = async function () {
    const dados_temporadas = await fetch("../dados/temporadas.json");
    const temporadas = await dados_temporadas.json();

    temporadas.forEach(element => {
        var conteudo = document.getElementById('elenco-2');

        //Create Card
        var card = document.createElement('div');
        card.classList.add('temporadas-2-card');
        //Create Card Title
        var card_title = document.createElement('div');
        card_title.classList.add('temporadas-2-card-title');
        var card_title_h3 = document.createElement('h3');
        //Create Card Statistics
        var card_statistics = document.createElement('div');
        card_statistics.classList.add('temporadas-2-card-statistics');
        //Create Table
        var card_statistics_table1 = document.createElement('table');
        //Create TRs e TDs
        var card_statistics_table1_tr1 = document.createElement('tr');
        var card_statistics_table1_tr1_td1 = document.createElement('td');
        var card_statistics_table1_tr1_td2 = document.createElement('td');
        var card_statistics_table1_tr2 = document.createElement('tr');
        var card_statistics_table1_tr2_td1 = document.createElement('td');
        var card_statistics_table1_tr2_td2 = document.createElement('td');
        var card_statistics_table1_tr3 = document.createElement('tr');
        var card_statistics_table1_tr3_td1 = document.createElement('td');
        var card_statistics_table1_tr3_td2 = document.createElement('td');
        var card_statistics_table1_tr4 = document.createElement('tr');
        var card_statistics_table1_tr4_td1 = document.createElement('td');
        var card_statistics_table1_tr4_td2 = document.createElement('td');
        var card_statistics_table1_tr5 = document.createElement('tr');
        var card_statistics_table1_tr5_td1 = document.createElement('td');
        var card_statistics_table1_tr5_td2 = document.createElement('td');
        //Create H3
        var card_statistics_table1_tr1_td1_h3 = document.createElement('h3');
        var card_statistics_table1_tr1_td2_h3 = document.createElement('h3');

        //Conteúdo Card Title
        card_title_h3.innerHTML = 'Nome do Jogador';
        //Conteúdo Card Statistics Table1
        card_statistics_table1_tr1_td1_h3.innerText = 'TEMPORADAS:';
        card_statistics_table1_tr1_td2_h3.innerText = element.temporadas;
        card_statistics_table1_tr2_td1.innerHTML = 'Titulos de Liga:';
        card_statistics_table1_tr2_td2.innerText = element.titulos_liga;
        card_statistics_table1_tr3_td1.innerHTML = 'Titulos de Copa:';
        card_statistics_table1_tr3_td2.innerText = element.titulos_copa;
        card_statistics_table1_tr4_td1.innerHTML = 'Acessos:';
        card_statistics_table1_tr4_td2.innerText = element.acessos;
        card_statistics_table1_tr5_td1.innerHTML = 'Rebaixamentos:';
        card_statistics_table1_tr5_td2.innerText = element.rebaixamentos;

        //Add Card
        conteudo.append(card);
        card.append(card_title, card_statistics);
        //Add Title
        card_title.append(card_title_h3);
        //Add Statistics
        //Table
        card_statistics.append(card_statistics_table1);
        //Table1 TRs
        card_statistics_table1.append(card_statistics_table1_tr1,card_statistics_table1_tr2,card_statistics_table1_tr3,card_statistics_table1_tr4,card_statistics_table1_tr5);
        //Table1 TDs
        card_statistics_table1_tr1.append(card_statistics_table1_tr1_td1,card_statistics_table1_tr1_td2);
        card_statistics_table1_tr2.append(card_statistics_table1_tr2_td1,card_statistics_table1_tr2_td2);
        card_statistics_table1_tr3.append(card_statistics_table1_tr3_td1,card_statistics_table1_tr3_td2);
        card_statistics_table1_tr4.append(card_statistics_table1_tr4_td1,card_statistics_table1_tr4_td2);
        card_statistics_table1_tr5.append(card_statistics_table1_tr5_td1,card_statistics_table1_tr5_td2);
    });
}
dadosTemporadas();