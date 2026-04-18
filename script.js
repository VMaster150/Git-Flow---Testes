document.querySelector('button').addEventListener('click', function(event) {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const cidade = document.getElementById('cidade');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome.value.trim() === "") {
        alert("Por favor, preencha o seu nome.");
        nome.focus();
    } 
    else if (!emailRegex.test(email.value)) {
        alert("Por favor, insira um e-mail válido.");
        email.focus();
    } 
    else if (senha.value.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        senha.focus();
    } 
    else if (cidade.value.trim() === "") {
        alert("Por favor, informe sua cidade.");
        cidade.focus();
    } 
    else {
        alert("Cadastro realizado com sucesso!");
        console.log({
            nome: nome.value,
            email: email.value,
            cidade: cidade.value
        });
    }
});