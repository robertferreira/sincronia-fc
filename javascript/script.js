// FUNÇÃO EXPANDIR CABEÇALHO AO PASSAR O MOUSE
const expandirCabecalho = function () {
    let cabecalho = document.getElementById('cabecalho');
    let logo_cabecalho = document.getElementById('logo-cabecalho');
    let opcao_cabecalho = document.getElementsByClassName('menu-cabecalho-opcao');

    cabecalho.addEventListener("mouseover", () => {
      // Expandir cabeçalho e logo
      cabecalho.setAttribute("id", "cabecalho-expandido");
      logo_cabecalho.setAttribute("id", "logo-cabecalho-expandido");

      // Expandir nome das opções
      for (let i = 0; i < opcao_cabecalho.length; i++) {
        opcao_cabecalho.item(i).setAttribute("id","menu-cabecalho-opcao-expandido");
      }
    })

    cabecalho.addEventListener("mouseout", () => {
      // Retrair cabeçalho e logo
      cabecalho.removeAttribute("id", "cabecalho-expandido");
      logo_cabecalho.removeAttribute("id", "logo-cabecalho-expandido");

      // Retrair nome das opções
      for (let i = 0; i < opcao_cabecalho.length; i++) {
        opcao_cabecalho.item(i).removeAttribute("id","menu-cabecalho-opcao-expandido");
      }
    })
}
expandirCabecalho();

// FUNÇÃO ABRIR E FECHAR CABEÇALHO MOBILE
const abrirFecharCabecalhoMobile = function () {
  let botao_abrir_cabecalho = document.getElementById('botao-abrir-menu-cabecalho');
  let botao_fechar_menu_cabecalho = document.getElementById('botao-fechar-menu-cabecalho');
  let cabecalho = document.getElementById('cabecalho');

  botao_abrir_cabecalho.addEventListener("click", () => {
    cabecalho.classList.add("mostrar");
  })
  botao_fechar_menu_cabecalho.addEventListener("click", () => {
    cabecalho.classList.remove("mostrar");
  })
}
abrirFecharCabecalhoMobile();