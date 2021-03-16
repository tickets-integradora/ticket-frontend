import getStyles from './../../../controller/utils/getStyles.js';

const Register = () => {
	getStyles('register');
	const view = `
    	<section class="register">
			<h1 class="register__title">Registro</h1>
			<p class="register__text up">¡Es bueno verte! Registrate para tener acceso a Ticket Cloud.</p>
			<p class="register__text down">¿Tienes una <a href="${'#/login'}">cuenta?</a></p>
			<div class="validation-error"></div>
			<form>
				<input class="form__input" id="name" type="text" placeholder="Nombre" />
				<input class="form__input" id="username" type="text" placeholder="Usuario" />
				<input class="form__input" id="email" type="text" placeholder="Correo" />
				<input class="form__input" id="password" type="password" placeholder="Contraseña" />
				<a id="login_button" class="form__button" onclick="sendRegistration(event)">Continuar</a>
			</form>
		</section>
    `;

	return view;
};
export default Register;
