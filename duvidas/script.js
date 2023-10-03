// Função para exibir o campo de pergunta quando o botão "Fazer uma pergunta" é clicado
function exibirCampoPergunta() {
  var campoPergunta = document.getElementById("campoPergunta");
  campoPergunta.style.display = "block";
}

// Função para adicionar uma nova pergunta ao blog
function adicionarPergunta() {
  var perguntaInput = document.getElementById("perguntaInput");
  var pergunta = perguntaInput.value.trim();

  if (pergunta !== "") {
    var blog = document.getElementById("blog");
    var perguntaDiv = document.createElement("div");
    perguntaDiv.className = "pergunta";
    perguntaDiv.innerHTML = `<p>${pergunta}</p><button onclick="exibirResposta(this)" id="btnDuv3">Responder</button><div class="resposta"><textarea cols="200" rows="auto" placeholder="Digite sua resposta aqui"></textarea><button onclick="enviarResposta(this)" id="btnDuv4">Enviar Resposta</button></div>`;
    blog.appendChild(perguntaDiv);
    perguntaInput.value = "";
    var campoPergunta = document.getElementById("campoPergunta");
    campoPergunta.style.display = "none";
  }
}

// Função para exibir o campo de resposta quando o botão de resposta é clicado
function exibirResposta(button) {
  var respostaDiv = button.nextElementSibling;
  respostaDiv.style.display = "block";
}

// Função para enviar uma resposta e ocultar o campo de resposta
function enviarResposta(button) {
  var respostaDiv = button.parentNode;
  var respostaTextarea = respostaDiv.querySelector("textarea");
  var resposta = respostaTextarea.value;

  if (resposta !== "") {
    var respostaP = document.createElement("p");
    respostaP.textContent = `Resposta: ${resposta}`;
    respostaDiv.parentNode.insertBefore(respostaP, respostaDiv);
    respostaTextarea.value = "";
    respostaDiv.style.display = "none";
  }
}