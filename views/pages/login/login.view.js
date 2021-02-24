const Login = () => {
	const view = `
        <section class="register">
			<h1 class="register__title">Login</h1>
			<p class="register__text up">Welcome back! Login to access the Ticket App.</p>
			<p class="register__text down">Did you <a href="${'#/register'}">forget your password?</a></p>
			<form>
				<input class="form__input" id="email" type="text" placeholder="Email" />
				<input class="form__input" id="password" type="password" placeholder="Password" />
				<a id="login_button" class="form__button" onclick="sendLogin(event)">continue</a>
			</form>
		</section>
    `;

	return view;
};

export default Login;
