const contadores = [
    document.getElementById("dias0"),
    document.getElementById("dias1"),
    document.getElementById("dias2"),
    document.getElementById("dias3")
  ];
  
  const horas = [
    document.getElementById("horas0"),
    document.getElementById("horas1"),
    document.getElementById("horas2"),
    document.getElementById("horas3")
  ];
  
  const minutos = [
    document.getElementById("min0"),
    document.getElementById("min1"),
    document.getElementById("min2"),
    document.getElementById("min3")
  ];
  
  const segundos = [
    document.getElementById("seg0"),
    document.getElementById("seg1"),
    document.getElementById("seg2"),
    document.getElementById("seg3")
  ];
  
  const objetivoFinal = new Date("2025-12-31T23:59:59");
  
  function atualizaContagem() {
    const agora = new Date();
    const tempoRestante = objetivoFinal - agora;
  
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const hrs = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((tempoRestante / (1000 * 60)) % 60);
    const segs = Math.floor((tempoRestante / 1000) % 60);
  
    for (let i = 0; i < 4; i++) {
      contadores[i].textContent = dias;
      horas[i].textContent = hrs;
      minutos[i].textContent = mins;
      segundos[i].textContent = segs;
    }
  }
  
  setInterval(atualizaContagem, 1000);
  
  // Troca de abas
  const botoes = document.querySelectorAll(".botao");
  const abas = document.querySelectorAll(".aba-conteudo");
  
  botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
      document.querySelector(".botao.ativo").classList.remove("ativo");
      botao.classList.add("ativo");
  
      document.querySelector(".aba-conteudo.ativo").classList.remove("ativo");
      abas[index].classList.add("ativo");
    });
  });
  