/*IDENTIFICANDO ELEMENTO DIV PRINCIPAL*/
const divPrincipal = document.getElementById('div-principal');

/*CRIANDO ELEMENTO BUTTON EXIT */
const popUpButtonExit = document.createElement('button');
popUpButtonExit.setAttribute('id','button-exit');

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
    let popUpP = document.createElement('div');
    let popUpImg = document.createElement('img');

    /*CONTEUDO POP-UP*/
    popUpH2.innerText = 'Navegue pelo meu Portfólio';
    popUpP.innerHTML =
    `<p> Este site foi totalmente desenvolvido utilizando apenas HTML, CSS e JavaScript. Sendo uma demonstração de minhas habilidades como programador. </p>
    <p> Apresentando o meu time no FIFA Pro Clubs, este site destaca com orgulho nossas conquistas, estatísticas e espírito competitivo. </p>`;
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
setTimeout(() => {abrirPopUp()}, 700);

const fecharPopUp = function(){
    const popUpOpen = document.getElementById('pop-up-open');
    /*FECHANDO POP-UP*/
    popUpOpen.setAttribute('id', 'pop-up-exit');
}
popUpButtonExit.addEventListener("click", () => {fecharPopUp();})