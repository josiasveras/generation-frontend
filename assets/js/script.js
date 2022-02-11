let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOK = false;
let emailOK = false;
let assuntoOK = false;
let mapa = document.querySelector('#mapa');

function validaNome() {
    let msgNome = document.querySelector('#msgNome');
    if (nome.value.length < 3) {
        msgNome.innerHTML = 'Nome inválido!';
        msgNome.style.color = 'red';
    } else {
        msgNome.innerHTML = 'Nome válido!';
        msgNome.style.color = 'green';
        nomeOK = true;
    }
}

function validaEmail() {
    let msgEmail = document.querySelector('#msgEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        msgEmail.innerHTML = 'Email inválido!';
        msgEmail.style.color = 'red';
    } else {
        msgEmail.innerHTML = 'Email válido!';
        msgEmail.style.color = 'green';
        emailOK = true;
    }
}

function validaAssunto() {
    let msgAssunto = document.querySelector('#msgAssunto');

    if (assunto.value.length >= 100) {
        msgAssunto.innerHTML = 'O texto não pode ter mais que 100 caracteres!'; 
        msgAssunto.style.color = 'red';
        msgAssunto.style.display = 'block';
    } else { 
        msgAssunto.style.display = 'none';
        assuntoOK = true;
    }
}

function enviar() {
    if (nomeOK == true && emailOK == true && assuntoOK == true) {
        alert ('Formulário enviado com sucesso!');
    } else {
        alert ('Preencha o formulário corretamente antes de enviar!');
    }
}

function mapaZoom() {
    mapa.style.width = '600px';
    mapa.style.height = '450px';
}

function mapaNormal() {
    mapa.style.width = '400px';
    mapa.style.height = '350px';
}

