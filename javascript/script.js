const expandirCabecalho = function () {
    let cabecalho = document.getElementById('cabecalho');
    let logo_cabecalho = document.getElementById('logo-cabecalho');
    let opcao_cabecalho = document.getElementsByClassName('menu-cabecalho-opcao');

    // EXPANDIR CABEÇALHO AO PASSAR O MOUSE
    cabecalho.addEventListener("mouseover", () => {
      // Expandir cabeçalho e logo
      cabecalho.setAttribute("id", "cabecalho-expandido");
      logo_cabecalho.setAttribute("id", "logo-cabecalho-expandido");

      // Expandir nome das opções
      for (let i = 0; i < opcao_cabecalho.length; i++) {
        opcao_cabecalho.item(i).classList.add("menu-cabecalho-opcao-expandido");
      }
    })

    // RETRAIR CABEÇALHO AO TIRAR O MOUSE
    cabecalho.addEventListener("mouseout", () => {
      // Retrair cabeçalho e logo
      cabecalho.removeAttribute("id", "cabecalho-expandido");
      logo_cabecalho.removeAttribute("id", "logo-cabecalho-expandido");

      // Retrair nome das opções
      for (let i = 0; i < opcao_cabecalho.length; i++) {
        opcao_cabecalho.item(i).classList.remove("menu-cabecalho-opcao-expandido");
      }

    })

    //INSERIR NOMES
}
expandirCabecalho();
