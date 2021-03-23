const sendRegistration = (event) => {
	event.preventDefault();
	const user = {
		name: document.getElementById('name').value,
		email: document.getElementById('email').value,
		password: document.getElementById('password').value,
	};
	if ((user.name && user.email && user.password) !== '') {
		validationError();
		firebase
			.auth()
			.createUserWithEmailAndPassword(user.email, user.password)
			.then((response) => {
				// Signed in
				let currentUser = firebase.auth().currentUser;
				currentUser
					.updateProfile({
						displayName: user.name,
						photoURL:
							'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
					})
					.then(function () {
						// Update successful.
						window.location.href = `${location.pathname}#/login`;
					})
					.catch(function (error) {
						let errorCode = error.code;
						let errorMessage = error.message;
						validationError(`Error ${errorCode} : ${errorMessage}`);
					});
			})
			.catch((error) => {
				let errorCode = error.code;
				let errorMessage = error.message;
				validationError(`Error ${errorCode} : ${errorMessage}`);
			});
	} else {
		validationError('Los campos no deben estar vacios');
	}
};
