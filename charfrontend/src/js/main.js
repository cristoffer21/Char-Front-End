function enviarMsg() {
    let msgUsuario = document.querySelector("#enviar-msg").value;
    let chatGeral = document.querySelector("#chat-geral");
    let novaMsg = document.createElement("div");
    novaMsg.classList.add("cliente-js");
    let ttMsg = document.createElement("h4");
    ttMsg.textContent = "cliente";
    novaMsg.appendChild(ttMsg);
    let conversa = document.createElement("p");
    conversa.textContent = msgUsuario;
    novaMsg.appendChild(conversa);
    chatGeral.appendChild(novaMsg);
    document.querySelector("#enviar-msg").value = " ";
}