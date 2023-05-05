const dadosTemporadas = async function () {
    const dados_elenco= await fetch("../dados/jogadores.json");
    const elenco = await dados_elenco.json();

    elenco.forEach(element => {
        var conteudo = document.getElementById('elenco-2');

        //Create Card
        var card = document.createElement('div');
        card.classList.add('elenco-2-card');
        //Create Card Title
        var card_title = document.createElement('div');
        card_title.classList.add('elenco-2-card-title');
        var card_title_h3 = document.createElement('h3');
        //Create Card Statistics
        var card_statistics = document.createElement('div');
        card_statistics.classList.add('elenco-2-card-statistics');
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
        var card_statistics_table1_tr6 = document.createElement('tr');
        var card_statistics_table1_tr6_td1 = document.createElement('td');
        var card_statistics_table1_tr6_td2 = document.createElement('td');

        //Conteúdo Card Title
        card_title_h3.innerText = element.id;
        //Conteúdo Card Statistics Table1
        card_statistics_table1_tr1_td1.innerText = 'Nome:';
        card_statistics_table1_tr1_td2.innerText = element.nome;
        card_statistics_table1_tr2_td1.innerText = 'Gamertag:';
        card_statistics_table1_tr2_td2.innerText = element.gamertag;
        card_statistics_table1_tr3_td1.innerText = 'Apelido:';
        card_statistics_table1_tr3_td2.innerText = element.apelido;
        card_statistics_table1_tr4_td1.innerText = 'Posição:';
        card_statistics_table1_tr4_td2.innerText =  element.posicao;
        card_statistics_table1_tr5_td1.innerText = 'Número:';
        card_statistics_table1_tr5_td2.innerText = element.numero;
        card_statistics_table1_tr6_td1.innerText = 'Perna Boa:';
        card_statistics_table1_tr6_td2.innerText = element.perna_boa;

        //Add Card
        conteudo.append(card);
        card.append(card_title, card_statistics);
        //Add Title
        card_title.append(card_title_h3);
        //Add Statistics
        //Table
        card_statistics.append(card_statistics_table1);
        //Table1 TRs
        card_statistics_table1.append(card_statistics_table1_tr1,card_statistics_table1_tr2,card_statistics_table1_tr3,card_statistics_table1_tr4,card_statistics_table1_tr5,card_statistics_table1_tr6);
        //Table1 TDs
        card_statistics_table1_tr1.append(card_statistics_table1_tr1_td1,card_statistics_table1_tr1_td2);
        card_statistics_table1_tr2.append(card_statistics_table1_tr2_td1,card_statistics_table1_tr2_td2);
        card_statistics_table1_tr3.append(card_statistics_table1_tr3_td1,card_statistics_table1_tr3_td2);
        card_statistics_table1_tr4.append(card_statistics_table1_tr4_td1,card_statistics_table1_tr4_td2);
        card_statistics_table1_tr5.append(card_statistics_table1_tr5_td1,card_statistics_table1_tr5_td2);
        card_statistics_table1_tr6.append(card_statistics_table1_tr6_td1,card_statistics_table1_tr6_td2);
    });
}
dadosTemporadas();