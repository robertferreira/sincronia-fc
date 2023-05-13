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
      div_conteudo.append(div_card);
      div_card.append(div_card_title,div_card_results);
      //Title
      div_card_title.append(div_card_title_h3);

      element.resultados.forEach(element => {
         //Create Result
         var div_card_result = document.createElement('div');
         div_card_result.classList.add('x2-2-result');
         //Create Player1
         var div_result_players1 = document.createElement('div');
         div_result_players1.classList.add('x2-2-result-players');
         var div_result_player1 = document.createElement('div');
         div_result_player1.classList.add('x2-x2-result-player');
         var div_result_player1_1 = document.createElement('div');
         div_result_player1_1.classList.add('x2-x2-result-player');
         var div_result_player_span1 = document.createElement('span');
         var div_result_player_span1_1 = document.createElement('span');
         var div_result_player_img1 = document.createElement('img');
         var div_result_player_img1_1 = document.createElement('img');
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
         var div_result_player2 = document.createElement('div');
         div_result_player2.classList.add('x2-x2-result-player');
         var div_result_player2_1 = document.createElement('div');
         div_result_player2_1.classList.add('x2-x2-result-player');
         var div_result_player_span2 = document.createElement('span');
         var div_result_player_span2_1 = document.createElement('span');
         var div_result_player_img2 = document.createElement('img');
         var div_result_player_img2_1 = document.createElement('img');

         // FOR EACH RESULT
         div_result_final1.innerText = element.dupla_1.vitorias;
         div_result_final2.innerText = element.dupla_2.vitorias;

         // FOR EACH PLAYER
         div_result_player_span1.innerText = element.dupla_1.membro_1;
         div_result_player_span1_1.innerText = element.dupla_1.membro_2;
         div_result_player_span2.innerText = element.dupla_2.membro_1;
         div_result_player_span2_1.innerText = element.dupla_2.membro_2;

         // FOR EACH IMG
         div_result_player_img1.src = element.dupla_1.membro_1_time_img;
         div_result_player_img1_1.src = element.dupla_1.membro_2_time_img;
         div_result_player_img2.src = element.dupla_2.membro_1_time_img;
         div_result_player_img2_1.src = element.dupla_2.membro_2_time_img;

         //Results
         div_card_results.append(div_card_result);
         div_card_result.append(div_result_players1,div_result_scoreboard,div_result_players2);
         //Player1
         div_result_players1.append(div_result_player1,div_result_player1_1);
         div_result_player1.append(div_result_player_img1,div_result_player_span1);
         div_result_player1_1.append(div_result_player_img1_1,div_result_player_span1_1);
         //Scoreboard
         div_result_scoreboard.append(div_result_final1,div_result_final2);
         //Player2
         div_result_players2.append(div_result_player2,div_result_player2_1);
         div_result_player2.append(div_result_player_img2,div_result_player_span2);
         div_result_player2_1.append(div_result_player_img2_1,div_result_player_span2_1);
      });
   });
}
dadosX2();
