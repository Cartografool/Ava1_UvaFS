async function testarServidor() {
  const resposta = document.getElementById("resposta");

  const led = document.getElementById("led");

  resposta.innerText = "Realizando conexão com o backend...";

  led.style.background = "#facc15";

  try {
    const requisicao = await fetch("http://144.22.173.63:5000");

    const dados = await requisicao.json();

    resposta.innerText = `${dados.mensagem} • ${dados.status}`;

    led.style.background = "#22c55e";
  } catch (erro) {
    resposta.innerText = "Servidor indisponível ou offline.";

    led.style.background = "#ef4444";

    console.error(erro);
  }
}
