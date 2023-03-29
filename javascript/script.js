const expandirCabecalho = function () {
    let cabecalho = document.getElementById('cabecalho');
    let logo_cabecalho = document.getElementById('logo-cabecalho');
    let opcao_cabecalho = document.getElementsByClassName('menu-cabecalho-opcao');

    // EXPANDIR CABEÇALHO E LOGO
    cabecalho.addEventListener("mouseover", () => {
      cabecalho.classList.add('cabecalho-expandido');
      logo_cabecalho.setAttribute("id", "logo-cabecalho-expandido");
      //opcao_cabecalho.item
    })
    cabecalho.addEventListener("mouseout", () => {
      cabecalho.classList.remove('cabecalho-expandido');
      logo_cabecalho.removeAttribute("id", "logo-cabecalho-expandido");
    })

    //INSERIR NOMES
}
expandirCabecalho();
