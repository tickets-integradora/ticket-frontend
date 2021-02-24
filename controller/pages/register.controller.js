const sendRegistration = (event) => {
	event.preventDefault();
	const username = document.getElementById('username').value;
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	console.log({username, email, password});
	location.href = '#/login';
};
