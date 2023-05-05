const dadosTemporadas = async function () {
    const dados_elenco= await fetch("../dados/jogadores.json");
    const elenco = await dados_elenco.json();
    const icon_nome = '<i class="fa-solid fa-circle-user"></i>';
    const icon_gamertag = '<i class="fa-brands fa-xbox"></i>';
    const icon_numero = '<i class="fa-solid fa-check"></i>';

    elenco.forEach(element => {
        var conteudo = document.getElementById('elenco-2');

        //Create Card
        var card = document.createElement('div');
        card.classList.add('elenco-2-card');
        //Create Card Title
        var card_title = document.createElement('div');
        card_title.classList.add('elenco-2-card-title');
        var card_title_h3 = document.createElement('h3');
        var card_title_img = document.createElement('img');
        card_title_img.setAttribute('src',element.time);
        //Create Card Image
        var card_image = document.createElement('div');
        card_image.classList.add('elenco-2-card-image');
        //Create Image
        var card_image_img = document.createElement('img');
        card_image_img.setAttribute('src','https://via.placeholder.com/300');
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

        //Conteúdo Card Title
        card_title_h3.innerText = element.id;
        //Conteúdo Card Statistics Table1
        card_statistics_table1_tr1_td1.innerHTML = icon_nome + 'Nome:';
        card_statistics_table1_tr1_td2.innerText = element.nome;
        card_statistics_table1_tr2_td1.innerHTML = icon_gamertag + 'Gamertag:';
        card_statistics_table1_tr2_td2.innerText = element.gamertag;
        card_statistics_table1_tr3_td1.innerText = 'Apelido:';
        card_statistics_table1_tr3_td2.innerText = element.apelido;
        card_statistics_table1_tr4_td1.innerText = 'Posição:';
        card_statistics_table1_tr4_td2.innerText =  element.posicao;
        card_statistics_table1_tr5_td1.innerHTML = 'Número:';
        card_statistics_table1_tr5_td2.innerText = element.numero;

        //Add Card
        conteudo.append(card);
        card.append(card_title, card_image,card_statistics);
        //Add Title
        card_title.append(card_title_img,card_title_h3);
        //Add Img
        card_image.append(card_image_img);
        //Add Statistics
        //Add Table
        card_statistics.append(card_statistics_table1);
        //Add Table1 TRs
        card_statistics_table1.append(card_statistics_table1_tr1,card_statistics_table1_tr2,card_statistics_table1_tr3,card_statistics_table1_tr4,card_statistics_table1_tr5);
        //Add Table1 TDs
        card_statistics_table1_tr1.append(card_statistics_table1_tr1_td1,card_statistics_table1_tr1_td2);
        card_statistics_table1_tr2.append(card_statistics_table1_tr2_td1,card_statistics_table1_tr2_td2);
        card_statistics_table1_tr3.append(card_statistics_table1_tr3_td1,card_statistics_table1_tr3_td2);
        card_statistics_table1_tr4.append(card_statistics_table1_tr4_td1,card_statistics_table1_tr4_td2);
        card_statistics_table1_tr5.append(card_statistics_table1_tr5_td1,card_statistics_table1_tr5_td2);
    });
}
dadosTemporadas();