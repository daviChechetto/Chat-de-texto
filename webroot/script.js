const botaoEnviar = document.getElementById("botaoEnviar");
const input = document.getElementById("mensagemInput");

const audioType = new Audio()
audioType.src = "../webroot/type.mp3";

const audioClick = new Audio()
audioClick.src = "../webroot/click.mp3";


function enviarMensagem() {
  const texto = input.value.trim();

  if (texto !== "") {
    const msg = document.createElement("div");
    msg.className = "mensagem enviada";
    msg.innerText = texto;
    document.getElementById("mensagens").appendChild(msg);
    input.value = "";
    document.getElementById("mensagens").scrollTop = document.getElementById("mensagens").scrollHeight;
  }
  input.focus()
}

botaoEnviar.addEventListener('click', function () {
  enviarMensagem()
})

input.addEventListener('keyup', function (evento) {
  if (evento.key === 'Enter') {
    enviarMensagem()
  }
  if (evento.key.length === 1) {
    audioType.currentTime = 0;
    audioType.play();
  }
})


