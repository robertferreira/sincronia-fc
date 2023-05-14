const icon_fotos = '<i class="fa-solid fa-image"></i>';
const icon_videos = '<i class="fa-brands fa-youtube"></i>';

const img = document.getElementById('img');
const setaReturnImg = document.getElementById('seta-return-img');
const setaNextImg = document.getElementById('seta-next-img');

const video = document.getElementById('video');
const setaReturnVideo = document.getElementById('seta-return-video');
const setaNextVideo = document.getElementById('seta-next-video');

var cont_img = 0;
var cont_video = 0;

/* Função Return Imagem */
const returnImage = async function () {
    const dados_imagens = await fetch("../dados/imagens.json");
    const imagens = await dados_imagens.json();

    if (cont_img != 0){
    cont_img--;
    img.setAttribute('src', imagens[cont_img].imagem);
    }
}

/* Função Next Imagem */
const nextImage = async function () {
    const dados_imagens = await fetch("../dados/imagens.json");
    const imagens = await dados_imagens.json();

    if (cont_img != (imagens.length - 1)){
        cont_img++;
        img.setAttribute('src', imagens[cont_img].imagem);
    }
}

setaReturnImg.addEventListener("click", () =>{returnImage()});
setaNextImg.addEventListener("click", () =>{nextImage()});