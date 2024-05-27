document.getElementById("btn-login").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o envio do formulário

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const errorMessage = document.getElementById("error-message");

    // Usuário e senha de teste
    const usuarioTeste = "reabilitame";
    const senhaTeste = "123456";

    if (usuario === usuarioTeste && senha === senhaTeste) {
        window.location.href = "./portal_usuario.html";
    } else {
        errorMessage.style.display = "block";
    }
});
