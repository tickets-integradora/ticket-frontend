const resolveRoutes = (route) => {
	let currentUser = sessionStorage.getItem('user.email');
	if (currentUser === null) {
		if (route === 'register' || route === 'login') {
			return `/${route}`;
		} else {
			return `/login`;
		}
	}
	return `/${route}`;
};

export default resolveRoutes;
