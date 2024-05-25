// Função para formatar o número de telefone
function formatPhoneNumber(input) {
    const phoneNumber = input.value.replace(/\D/g, "");
    if (phoneNumber.length <= 11) {
        let formatted = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
        input.value = formatted;
    }
}

// Função para validar email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Adicionar evento ao input de telefone
document.getElementById("telefone").addEventListener("input", function() {
    formatPhoneNumber(this);
});

// Adicionar evento ao formulário para validar email e mostrar mensagem de sucesso
document.querySelector(".consulta-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Previne o envio do formulário

    const emailInput = document.getElementById("email");
    const nomeInput = document.getElementById("nome").value;
    const telefoneInput = document.getElementById("telefone").value;
    const dataInput = document.getElementById("data").value;
    const horaInput = document.getElementById("hora").value;
    const tipoInput = document.getElementById("tipo").value;

    if (!validateEmail(emailInput.value)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    const successMessage = `
        <div class="success-message">
            <h3>Consulta marcada com sucesso!</h3>
            <p><strong>Nome Completo:</strong> ${nomeInput}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Telefone:</strong> ${telefoneInput}</p>
            <p><strong>Data:</strong> ${dataInput}</p>
            <p><strong>Hora:</strong> ${horaInput}</p>
            <p><strong>Tipo de Consulta:</strong> ${tipoInput}</p>
        </div>
    `;

    document.querySelector(".consulta-section").innerHTML = successMessage;
});

// Evento para o botão de baixar exames
document.querySelector(".exames-section button").addEventListener("click", function() {
    alert("Você não tem exames para serem baixados.");
});
