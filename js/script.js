

//script para que quando clicar no botão enviar, apareça na tela "mensagem enviada"

function Enviar() {
  document.getElementById('formulario').style.display = 'none';
  document.getElementById('mensagem-enviada').style.display = 'block';
  event.preventDefault();
}
 

function AbrirEspecialidades() {
  window.open("especialidades.html");
}

function AbrirPlanos() {
  window.open("planos.html");
}

function AbrirUsuario() {
  window.open("logado.html");
}


