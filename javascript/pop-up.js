const botaoPopUp = document.getElementById('button-exit');
const fecharPopUp = function(){
    const popUpOpen = document.getElementById('pop-up-open');

    popUpOpen.setAttribute('id', 'pop-up-exit');

    console.log('teste');
}
botaoPopUp.addEventListener("click", () => {fecharPopUp();})