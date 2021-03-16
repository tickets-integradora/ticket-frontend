import getStyles from './../../../controller/utils/getStyles.js';

const Login = () => {
	getStyles('login');

	const view = `
        <section class="register">
			<h1 class="register__title">Iniciar Sesión</h1>
			<p class="register__text up">¡Bienvenido de nuevo! Inicia sesión para acceder a Ticket Cloud.</p>
			<p class="register__text down">¿Eres <a href="${'#/register'}">nuevo aqui?</a></p>
			<div class="validation-error"></div>
			<form>
				<input class="form__input" id="email" type="text" placeholder="Correo" />
				<div class="form__input">
					<input id="password" type="password" placeholder="Contraseña" />
					<button onclick="showPassword()"><span id="eye" class="material-icons">
					visibility
					</span></button>
				</div>
				<a id="login_button" class="form__button" onclick="sendLogin(event)">Continuar</a>
			</form>
		</section>
    `;

	return view;
};

export default Login;
