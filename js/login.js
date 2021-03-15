const login = document.getElementById('login');
const contSubmit = document.querySelector('.input-submit');

let containerInput = document.querySelectorAll('.input-group');
let input = document.querySelectorAll('.input-form');

let alertError = document.getElementById('alertError');
let message = document.getElementById('textAlert');

//contenedores de inputs
let contEmail = document.getElementById('contEmail');
let contPass = document.getElementById('contPass');

//inputs
let email = document.getElementById('email');
let pass = document.getElementById('pass');

//RECORREMOS NUESTROS INPUTS
containerInput.forEach((collbak) => {
    collbak.addEventListener('click', () => {
        containerInput.forEach((item) => item.classList.remove('active'));
        collbak.classList.add('active');
    })
})

//FUNSION MOSTRAR ALERTA
const showAlert = (item) => {
    item.classList.add('show');
    item.classList.remove('hide');
    item.classList.add('showAlert');
    //ocultar el alert automaticamente despues de 5s
    setTimeout(() => {
        hiddeAlert(item);
    }, 5000);
}

//FUNSION OCULTAR ALERTA
const hiddeAlert = (item) => {
    item.classList.remove('show');
    item.classList.add('hide');
}

//FUNSION ELIMINAR CLASE ERROR DE LOS CONTENEDORES INPUT
const removeClassContent = () => {
    contEmail.classList.remove('error');
    contPass.classList.remove('error');
    contSubmit.classList.remove('active');
    hiddeAlert(alertError);
}

//LLAMAMOS LA FUNSION ANTERIOR
input.forEach((collbak) => {
    collbak.addEventListener('focus', removeClassContent);
    collbak.addEventListener('blur', () => {
        containerInput.forEach((item) => item.classList.remove('active'));
    })
})

//FUNSION AÑADIR CLASSE ERROR A LOS CONTENEDORES INPUT
const errors = (item) => {
    item.classList.add('error');
}

//VALIDASIONES
let validEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let validPass = /^.{6,24}$/;
let messeageError = '';

login.addEventListener('submit', e => {

    e.preventDefault();

    contSubmit.classList.add('active');

    if (!validEmail.test(email.value)) {
        errors(contEmail);
        showAlert(alertError);
        messeageError = 'Ingrese un correo valido! ';
    } else if (!validPass.test(pass.value)) {
        errors(contPass);
        showAlert(alertError);
        messeageError = 'La contraseña debe se mayor a 6 caracteres!';
    }

    if (messeageError != false) {
        message.innerHTML = messeageError;
    } else {
        alert('Bienvenido');
        login.reset();
    }

})