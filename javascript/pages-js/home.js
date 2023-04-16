const dadosHome3Coluna = async function(){

const res = await fetch("./dados/jogadores.json");
const data = await res.json();
console.log(data);

}
dadosHome3Coluna();