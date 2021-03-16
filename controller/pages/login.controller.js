const API = './../../model/user.json';

const sendLogin = async (event) => {
	event.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	if ((email && password) !== '') {
		postUser(email, password).then((resp) => {
			resp === true ? (window.location.href = '#/tickets') : validationError('Email o contraseña incorrectos');
		});
	}
	validationError('Los campos no deben estar vacios');
};

const validationError = (message) => {
	const errorField = document.querySelector('.validation-error');
	message !== undefined ? (errorField.innerHTML = message) : (errorField.innerText = '');
};

const showPassword = () => {
	const password = document.getElementById('password');
	const eye = document.getElementById('eye');
	password.type === 'password'
		? ((password.type = 'text'), (eye.innerHTML = 'visibility_off'))
		: ((password.type = 'password'), (eye.innerHTML = 'visibility'));
};

const postUser = async (email, password) => {
	const apiURL = API;
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		if (data.email === email && data.constrasena === password) {
			return true;
		} else {
			return false;
		}
	} catch (error) {
		console.error('Fetch Error', error);
	}
};
