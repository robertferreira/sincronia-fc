const expandirCabecalho = function () {
    let cabecalho = document.getElementById('cabecalho');

    cabecalho.addEventListener("mouseover", () => 
      cabecalho.classList.add('cabecalho-expandido')
    )

    cabecalho.addEventListener("mouseout", () => 
      cabecalho.classList.remove('cabecalho-expandido')
    )
}
expandirCabecalho();
