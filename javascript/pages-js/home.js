const dadosHome3Coluna = async function(){

const dados = await fetch("./dados/jogadores.json");
const jogadores = await dados.json();

console.log(jogadores);

jogadores.forEach(element => {
    console.log(element.nome);
});

}
dadosHome3Coluna();

