/* ICONES */
const icon_fotos = '<i class="fa-solid fa-image"></i>';
const icon_videos = '<i class="fa-brands fa-youtube"></i>';

/* COMPONENTES IMAGEM */
const img = document.getElementById('img');
const setaReturnImg = document.getElementById('seta-return-img');
const setaNextImg = document.getElementById('seta-next-img');

/* COMPONENTES VIDEO */
const video = document.getElementById('video');
const setaReturnVideo = document.getElementById('seta-return-video');
const setaNextVideo = document.getElementById('seta-next-video');



var cont_img = 0;
var cont_video = 0;

const dados_imagens = await fetch("../dados/imagens.json");
const imagens = await dados_imagens.json();
img.style.backgroundImage = `url(${imagens[cont_img].imagem})`;

const dados_videos = await fetch("../dados/videos.json");
const videos = await dados_videos.json();
video.setAttribute('src', videos[cont_video].video);

/* IMAGEM */
/* Função Return Imagem */
const returnImage = async function () {
    const dados_imagens = await fetch("../dados/imagens.json");
    const imagens = await dados_imagens.json();

    if (cont_img != 0) {
        cont_img--;
        img.style.backgroundImage = `url(${imagens[cont_img].imagem})`;
    }
}
/* Função Next Imagem */
const nextImage = async function () {
    const dados_imagens = await fetch("../dados/imagens.json");
    const imagens = await dados_imagens.json();

    if (cont_img != (imagens.length - 1)) {
        cont_img++;
        img.style.backgroundImage = `url(${imagens[cont_img].imagem})`;
    }
}

/* VIDEO */
/* Função Return Video */
const returnVideo = async function () {
    const dados_videos = await fetch("../dados/videos.json");
    const videos = await dados_videos.json();

    if (cont_video != 0) {
        cont_video--;
        video.setAttribute('src', videos[cont_video].video);
    }
}
/* Função Next Video */
const nextVideo = async function () {
    const dados_videos = await fetch("../dados/videos.json");
    const videos = await dados_videos.json();

    if (cont_video != (videos.length - 1)) {
        cont_video++;
        video.setAttribute('src', videos[cont_video].video);
    }
}

/* CLICKS */
setaReturnImg.addEventListener("click", () => { returnImage() });
setaNextImg.addEventListener("click", () => { nextImage() });
setaReturnVideo.addEventListener("click", () => { returnVideo() });
setaNextVideo.addEventListener("click", () => { nextVideo() });