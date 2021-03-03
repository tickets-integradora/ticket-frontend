import getStyles from './../../../controller/utils/getStyles.js';

const Login = () => {
	getStyles('login');

	const view = `
        <section class="register">
			<h1 class="register__title">Login</h1>
			<p class="register__text up">Welcome back! Login to access the Ticket App.</p>
			<p class="register__text down">Are you <a href="${'#/register'}">new here?</a></p>
			<div class="validation-error"></div>
			<form>
				<input class="form__input" id="email" type="text" placeholder="Email" />
				<div class="form__input">
					<input id="password" type="password" placeholder="Password" />
					<button onclick="showPassword()"><img id="eye" src="https://img.icons8.com/metro/26/000000/visible.png"/></button>
				</div>
				<a id="login_button" class="form__button" onclick="sendLogin(event)">continue</a>
			</form>
		</section>
    `;

	return view;
};

export default Login;
