const registroForm = document.getElementById('registro');
const contSubmit = document.querySelector('.input-submit');

let containerInput = document.querySelectorAll('.input-group');
let input = document.querySelectorAll('.input-form');

let alertError = document.getElementById('alertError');
let message = document.getElementById('textAlert');

//contenedores de inputs
let contEmail = document.getElementById('contEmail');
let contName = document.getElementById('contName');
let contPass = document.getElementById('contPass');
let contCpass = document.getElementById('contCpass');

//inputs
let email = document.getElementById('email');
let names = document.getElementById('name');
let pass = document.getElementById('pass');
let cpass = document.getElementById('cpass');

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
    contName.classList.remove('error');
    contPass.classList.remove('error');
    contCpass.classList.remove('error');
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
let validName = /^[a-zA-ZÀ-ÿ\s]{12,40}$/;
let validPass = /^.{6,24}$/;
let messeageError = '';

registroForm.addEventListener('submit', e => {

    e.preventDefault();

    contSubmit.classList.add('active');

    if (!validEmail.test(email.value)) {
        errors(contEmail);
        showAlert(alertError);
        messeageError = 'Ingrese un correo valido! ';
    } else if (!validName.test(names.value)) {
        errors(contName);
        showAlert(alertError);
        messeageError = 'Ingrese su nombre completo!';
    } else if (!validPass.test(pass.value)) {
        errors(contPass);
        showAlert(alertError);
        messeageError = 'La contraseña debe se mayor a 6 caracteres!';
    } else if (!validPass.test(cpass.value)) {
        errors(contCpass);
        showAlert(alertError);
        messeageError = 'Confirme su contraseña!';
    } else if (pass.value != cpass.value) {
        messeageError = 'Las contraseñas ingresadas no coinciden!';
        errors(contCpass);
        errors(contPass);
        showAlert(alertError);
    }

    if (messeageError != false) {
        message.innerHTML = messeageError;
    } else {

        alert('Registro exitoso');
        registroForm.reset();
    }

});