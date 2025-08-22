let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;

  if (nome === "") {
    alert("Digite um nome!");
  } else {
    amigos.push(nome);
    mostrarLista();
    document.getElementById("amigo").value = "";
  }
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum nome na lista!");
  } else {
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").innerHTML = 
      "<li>🎉 O amigo secreto é: <strong>" + sorteado + "</strong></li>";
  }
}
