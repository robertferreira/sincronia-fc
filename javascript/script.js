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

    //INSERIR NOMES
}
expandirCabecalho();

// FUNÇÃO (FECHAR / ABRIR) CABEÇALHO MOBILE
const abrirCabecalhoMobile = function () {
  let botao_abrir_cabecalho = document.getElementById('botao-abrir-menu-cabecalho');
  let cabecalho = document.getElementById('cabecalho');

  botao_abrir_cabecalho.addEventListener("click", () => {
    cabecalho.classList.add("mostrar");
  })

}
abrirCabecalhoMobile();