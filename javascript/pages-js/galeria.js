const icon_fotos = '<i class="fa-solid fa-image"></i>';
const icon_videos = '<i class="fa-brands fa-youtube"></i>';

const carroselImagensGaleria = async function () {
    const dados_imagens = await fetch("../dados/temporadas.json");
    const imagens = await dados_imagens.json();
}
carroselImagensGaleria();