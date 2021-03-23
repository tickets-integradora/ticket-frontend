const getCurrentUser = () => {
	let user = firebase.auth().currentUser;
	return user;
};

export default getCurrentUser;
