const dadosX2 = async function () {
 // DADOS JSON
 const dados_x2 = await fetch("../dados/X2.json");
 const resultados = await dados_x2.json();
 const div_conteudo = document.getElementById('conteudo-x2');

 resultados.forEach(element => {
    var div_card = document.createElement('div');
    div_card.classList.add('x2-2-card');

    div_card.innerText += element.fifa;

    div_conteudo.appendChild(div_card);
 });
}
dadosX2();