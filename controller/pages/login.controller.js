const API = './../../model/user.json';

const sendLogin = async (event) => {
	event.preventDefault();
	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;
	const auth = firebase.auth();

	auth.signInWithEmailAndPassword(email, password)
		.then((result) => {
			// Signed in
			// sessionStorage.setItem('token', token);
			let user = result.user;
			sessionStorage.setItem('user.name', user.displayName);
			sessionStorage.setItem('user.email', user.email);
			sessionStorage.setItem('user.photo', user.photoURL);
			window.location.href = `${location.pathname}#/tickets`;
		})
		.catch((error) => {
			let errorCode = error.code;
			let errorMessage = error.message;
			validationError(`Error ${errorCode} : ${errorMessage}`);
		});
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

const googleLogin = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	firebase
		.auth()
		.signInWithPopup(provider)
		.then((result) => {
			/** @type {firebase.auth.OAuthCredential} */
			let credential = result.credential;

			// This gives you a Google Access Token. You can use it to access the Google API.
			let token = credential.accessToken;
			// The signed-in user info.
			let user = result.user;
			sessionStorage.setItem('token', token);
			sessionStorage.setItem('user.name', user.displayName);
			sessionStorage.setItem('user.email', user.email);
			sessionStorage.setItem('user.photo', user.photoURL);
			window.location.href = `${location.pathname}#/tickets`;
		})
		.catch((error) => {
			// Handle Errors here.
			let errorCode = error.code;
			let errorMessage = error.message;
			// The email of the user's account used.
			let email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			let credential = error.credential;
			validationError(`Error ${errorCode} : ${errorMessage}`);
			console.error(error);
		});
};
