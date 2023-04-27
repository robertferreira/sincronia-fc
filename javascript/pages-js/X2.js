const dadosX2 = async function () {
 // DADOS JSON
 const dados_x2 = await fetch("../dados/X2.json");
 const resultados = await dados_x2.json();
 const div_conteudo = document.getElementById('conteudo-x2');
 const bola_icon = '<i class="fa-regular fa-futbol"></i>';

 resultados.forEach(element => {
    var div_card = document.createElement('div');
    div_card.classList.add('x2-2-card');
    var div_card_title = document.createElement('div');
    div_card_title.classList.add('x2-2-card-title');
    var div_card_title_h3 = document.createElement('h3');


    div_card_title_h3.innerHTML += bola_icon + element.fifa;

    div_conteudo.appendChild(div_card);
    div_card.appendChild(div_card_title);
    div_card_title.appendChild(div_card_title_h3);
 });
}
dadosX2();