const sendRegistration = (event) => {
	event.preventDefault();
	const user = {
		name: document.getElementById('name').value,
		username: document.getElementById('username').value,
		email: document.getElementById('email').value,
		password: document.getElementById('password').value,
	};
	if ((user.name && user.username && user.email && user.password) !== '') {
		validationError();
		window.location.href = '#/login';
	} else {
		validationError('Los campos no deben estar vacios');
	}
};
