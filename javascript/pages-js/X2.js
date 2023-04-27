const dadosX2 = async function () {
   // DADOS JSON
   const dados_x2 = await fetch("../dados/X2.json");
   const resultados = await dados_x2.json();
   const div_conteudo = document.getElementById('conteudo-x2');
   const bola_icon = '<i class="fa-regular fa-futbol"></i>';

   resultados.forEach(element => {
      //Create Card
      var div_card = document.createElement('div');
      div_card.classList.add('x2-2-card');
      //Create Titulo
      var div_card_title = document.createElement('div');
      div_card_title.classList.add('x2-2-card-title');
      var div_card_title_h3 = document.createElement('h3');
      //Create Results
      var div_card_results = document.createElement('div');
      div_card_results.classList.add('x2-2-card-results');

      // FOR EACH FIFA
      div_card_title_h3.innerHTML += bola_icon + element.fifa;

      //Card
      div_conteudo.appendChild(div_card);
      //Title
      div_card.appendChild(div_card_title);
      div_card_title.appendChild(div_card_title_h3);
      //Results
      div_card.appendChild(div_card_results);

      element.resultados.forEach(element => {
         //Create Result
         var div_card_result = document.createElement('div');
         div_card_result.classList.add('x2-2-result');
         //Create Player1
         var div_result_players1 = document.createElement('div');
         div_result_players1.classList.add('x2-2-result-players');
         //Create Scoreboard
         var div_result_scoreboard = document.createElement('div');
         div_result_scoreboard.classList.add('x2-2-result-scoreboard');
         var div_result_final1 = document.createElement('div');
         div_result_final1.classList.add('x2-2-result-final');
         var div_result_final2 = document.createElement('div');
         div_result_final2.classList.add('x2-2-result-final');
         //Create Player2
         var div_result_players2 = document.createElement('div');
         div_result_players2.classList.add('x2-2-result-players');

         div_result_final1.innerText = element.dupla_1.vitorias;
         div_result_final2.innerText = element.dupla_2.vitorias;

         //Results
         div_card_results.appendChild(div_card_result);
         //Player1
         div_card_result.appendChild(div_result_players1);
         //Scoreboard
         div_card_result.appendChild(div_result_scoreboard);
         div_result_scoreboard.appendChild(div_result_final1);
         div_result_scoreboard.appendChild(div_result_final2);
         //Player2
         div_card_result.appendChild(div_result_players2);
      });
   });
}
dadosX2();