const sendLogin = (event) => {
	event.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	console.log({email, password});
	location.href = '#/tickets';
};
