const Register = () => {
	const view = `
    	<section class="register">
			<h1 class="register__title">Register</h1>
			<p class="register__text up">Is good to see you! Register to access the Ticket App.</p>
			<p class="register__text down">Did you <a href="${'#/register'}">forget your password?</a></p>
			<form>
				<input class="form__input" id="username" type="text" placeholder="Username" />
				<input class="form__input" id="email" type="text" placeholder="Email" />
				<input class="form__input" id="password" type="password" placeholder="Password" />
				<a id="login_button" class="form__button" onclick="sendRegistration(event)">continue</a>
			</form>
		</section>
    `;

	return view;
};
export default Register;
