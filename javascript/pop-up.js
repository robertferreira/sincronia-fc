const divPrincipal = document.getElementById('div-principal');
const abrirPopUp = function(){
    /*CRIANDO ELEMENTOS DO POP-UP*/
    let divPopUpBackground = document.createElement('div');
    divPopUpBackground.setAttribute('class', 'pop-up-background');
    divPopUpBackground.setAttribute('id', 'pop-up-open');
    let divPopUp = document.createElement('div');
    divPopUp.setAttribute('class', 'pop-up');
    let divPopUpText = document.createElement('div');
    divPopUpText.setAttribute('class', 'pop-up-text');
    let divPopUpImg = document.createElement('div');
    divPopUpImg.setAttribute('class', 'pop-up-img');
    let divPopUpExit = document.createElement('div');
    divPopUpExit.setAttribute('class', 'pop-up-exit');
    let popUpH2 = document.createElement('h2');
    let popUpP = document.createElement('p');
    let popUpImg = document.createElement('img');
    let popUpButtonExit = document.createElement('button');
    popUpButtonExit.setAttribute('id','button-exit');

    /*CONTEUDO POP-UP*/
    popUpH2.innerText = 'TESTE';
    popUpP.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quos eius consequatur, veritatis suscipit ipsum tempore necessitatibus, magni maiores molestiae eos? Sapiente, autem labore odit ad eligendi neque provident cumque? lor';
    popUpImg.setAttribute('src', './imagens/pop-up/html-css-js.png')
    popUpButtonExit.innerText = 'X';

    /*INSERINDO ELEMENTOS POP-UP*/
    divPrincipal.prepend(divPopUpBackground);
    divPopUpBackground.append(divPopUp);
    divPopUp.append(divPopUpText,divPopUpImg,divPopUpExit);
    divPopUpText.append(popUpH2,popUpP);
    divPopUpImg.append(popUpImg);
    divPopUpExit.append(popUpButtonExit);
}
setTimeout(() => {abrirPopUp()}, 1000);

const fecharPopUp = function(){
    const popUpOpen = document.getElementById('pop-up-open');
    /*FECHANDO POP-UP*/
    popUpOpen.setAttribute('id', 'pop-up-exit');
}
const botaoPopUp = document.getElementById('button-exit');
botaoPopUp.addEventListener("click", () => {fecharPopUp();})