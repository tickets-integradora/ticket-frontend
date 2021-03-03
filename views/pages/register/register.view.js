import getStyles from './../../../controller/utils/getStyles.js';

const Register = () => {
	getStyles('register');
	const view = `
    	<section class="register">
			<h1 class="register__title">Register</h1>
			<p class="register__text up">Is good to see you! Register to access the Ticket App.</p>
			<p class="register__text down">Do you <a href="${'#/login'}">have an account?</a></p>
			<div class="validation-error"></div>
			<form>
				<input class="form__input" id="name" type="text" placeholder="Nombre" />
				<input class="form__input" id="username" type="text" placeholder="Usuario" />
				<input class="form__input" id="email" type="text" placeholder="Email" />
				<input class="form__input" id="password" type="password" placeholder="Contraseña" />
				<a id="login_button" class="form__button" onclick="sendRegistration(event)">continue</a>
			</form>
		</section>
    `;

	return view;
};
export default Register;
